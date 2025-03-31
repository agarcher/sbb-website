(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const er="160",Do=0,vr=1,Io=2,tr=1,Uo=2,Jt=3,dn=0,Tt=1,ht=2,cn=0,Zn=1,xr=2,Mr=3,Sr=4,Fo=5,En=100,No=101,Oo=102,yr=103,Er=104,ko=200,Ho=201,zo=202,Go=203,Gs=204,Vs=205,Vo=206,Wo=207,Xo=208,qo=209,Yo=210,$o=211,Ko=212,jo=213,Zo=214,Jo=0,Qo=1,el=2,$i=3,tl=4,nl=5,il=6,sl=7,Ya=0,rl=1,al=2,hn=0,ol=1,ll=2,cl=3,hl=4,ul=5,dl=6,$a=300,Qn=301,ei=302,Ws=303,Xs=304,es=306,qs=1e3,Ht=1001,Ys=1002,dt=1003,br=1004,cs=1005,Et=1006,fl=1007,mi=1008,un=1009,pl=1010,ml=1011,nr=1012,Ka=1013,on=1014,ln=1015,gi=1016,ja=1017,Za=1018,wn=1020,gl=1021,zt=1023,Bl=1024,_l=1025,An=1026,ti=1027,vl=1028,Ja=1029,xl=1030,Qa=1031,eo=1033,hs=33776,us=33777,ds=33778,fs=33779,Tr=35840,wr=35841,Ar=35842,Rr=35843,to=36196,Cr=37492,Lr=37496,Pr=37808,Dr=37809,Ir=37810,Ur=37811,Fr=37812,Nr=37813,Or=37814,kr=37815,Hr=37816,zr=37817,Gr=37818,Vr=37819,Wr=37820,Xr=37821,ps=36492,qr=36494,Yr=36495,Ml=36283,$r=36284,Kr=36285,jr=36286,no=3e3,Rn=3001,Sl=3200,yl=3201,io=0,El=1,It="",nt="srgb",en="srgb-linear",ir="display-p3",ts="display-p3-linear",Ki="linear",$e="srgb",ji="rec709",Zi="p3",Dn=7680,Zr=519,bl=512,Tl=513,wl=514,so=515,Al=516,Rl=517,Cl=518,Ll=519,Jr=35044,Qr="300 es",$s=1035,Qt=2e3,Ji=2001;class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ms=Math.PI/180,Ks=180/Math.PI;function _i(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[s&255]+pt[s>>8&255]+pt[s>>16&255]+pt[s>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function Pl(s,e){return(s%e+e)%e}function gs(s,e,t){return(1-t)*s+t*e}function ea(s){return(s&s-1)===0&&s!==0}function js(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ci(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function yt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,i,r,o,a,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],m=n[5],B=n[8],g=i[0],f=i[3],d=i[6],y=i[1],v=i[4],b=i[7],R=i[2],w=i[5],T=i[8];return r[0]=o*g+a*y+l*R,r[3]=o*f+a*v+l*w,r[6]=o*d+a*b+l*T,r[1]=c*g+h*y+u*R,r[4]=c*f+h*v+u*w,r[7]=c*d+h*b+u*T,r[2]=p*g+m*y+B*R,r[5]=p*f+m*v+B*w,r[8]=p*d+m*b+B*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,p=a*l-h*r,m=c*r-o*l,B=t*u+n*p+i*m;if(B===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/B;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=p*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Bs.makeScale(e,t)),this}rotate(e){return this.premultiply(Bs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new Ne;function ro(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Bi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dl(){const s=Bi("canvas");return s.style.display="block",s}const ta={};function pi(s){s in ta||(ta[s]=!0,console.warn(s))}const na=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ia=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Si={[en]:{transfer:Ki,primaries:ji,toReference:s=>s,fromReference:s=>s},[nt]:{transfer:$e,primaries:ji,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ts]:{transfer:Ki,primaries:Zi,toReference:s=>s.applyMatrix3(ia),fromReference:s=>s.applyMatrix3(na)},[ir]:{transfer:$e,primaries:Zi,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ia),fromReference:s=>s.applyMatrix3(na).convertLinearToSRGB()}},Il=new Set([en,ts]),We={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Il.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Si[e].toReference,i=Si[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Si[s].primaries},getTransfer:function(s){return s===It?Ki:Si[s].transfer}};function Jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let In;class ao{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{In===void 0&&(In=Bi("canvas")),In.width=e.width,In.height=e.height;const n=In.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=In}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jn(t[n]/255)*255):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ul=0;class oo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=_i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(vs(i[o].image)):r.push(vs(i[o]))}else r=vs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function vs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ao.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fl=0;class St extends ii{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Ht,i=Ht,r=Et,o=mi,a=zt,l=un,c=St.DEFAULT_ANISOTROPY,h=It){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=_i(),this.name="",this.source=new oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Rn?nt:It),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$a)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case Ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case Ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nt?Rn:no}set encoding(e){pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Rn?nt:It}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=$a;St.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],B=l[9],g=l[2],f=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-g)<.01&&Math.abs(B-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(B+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(m+1)/2,R=(d+1)/2,w=(h+p)/4,T=(u+g)/4,V=(B+f)/4;return v>b&&v>R?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=T/n):b>R?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=w/i,r=V/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=T/r,i=V/r),this.set(n,i,r,t),this}let y=Math.sqrt((f-B)*(f-B)+(u-g)*(u-g)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(f-B)/y,this.y=(u-g)/y,this.z=(p-h)/y,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nl extends ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(pi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Rn?nt:It),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new oo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Nl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lo extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const p=r[o+0],m=r[o+1],B=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=B,e[t+3]=g;return}if(u!==g||l!==p||c!==m||h!==B){let f=1-a;const d=l*p+c*m+h*B+u*g,y=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const R=Math.sqrt(v),w=Math.atan2(R,d*y);f=Math.sin(f*w)/R,a=Math.sin(a*w)/R}const b=a*y;if(l=l*f+p*b,c=c*f+m*b,h=h*f+B*b,u=u*f+g*b,f===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],p=r[o+1],m=r[o+2],B=r[o+3];return e[t]=a*B+h*u+l*m-c*p,e[t+1]=l*B+h*p+c*u-a*m,e[t+2]=c*B+h*m+a*p-l*u,e[t+3]=h*B-a*u-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),p=l(n/2),m=l(i/2),B=l(r/2);switch(o){case"XYZ":this._x=p*h*u+c*m*B,this._y=c*m*u-p*h*B,this._z=c*h*B+p*m*u,this._w=c*h*u-p*m*B;break;case"YXZ":this._x=p*h*u+c*m*B,this._y=c*m*u-p*h*B,this._z=c*h*B-p*m*u,this._w=c*h*u+p*m*B;break;case"ZXY":this._x=p*h*u-c*m*B,this._y=c*m*u+p*h*B,this._z=c*h*B+p*m*u,this._w=c*h*u-p*m*B;break;case"ZYX":this._x=p*h*u-c*m*B,this._y=c*m*u+p*h*B,this._z=c*h*B-p*m*u,this._w=c*h*u+p*m*B;break;case"YZX":this._x=p*h*u+c*m*B,this._y=c*m*u+p*h*B,this._z=c*h*B-p*m*u,this._w=c*h*u-p*m*B;break;case"XZY":this._x=p*h*u-c*m*B,this._y=c*m*u-p*h*B,this._z=c*h*B+p*m*u,this._w=c*h*u+p*m*B;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=i*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xs.copy(this).projectOnVector(e),this.sub(xs)}reflect(e){return this.sub(xs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xs=new P,sa=new si;class Pn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ut.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ut.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ut.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ut):Ut.fromBufferAttribute(r,o),Ut.applyMatrix4(e.matrixWorld),this.expandByPoint(Ut);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yi.copy(n.boundingBox)),yi.applyMatrix4(e.matrixWorld),this.union(yi)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ut),Ut.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hi),Ei.subVectors(this.max,hi),Un.subVectors(e.a,hi),Fn.subVectors(e.b,hi),Nn.subVectors(e.c,hi),tn.subVectors(Fn,Un),nn.subVectors(Nn,Fn),gn.subVectors(Un,Nn);let t=[0,-tn.z,tn.y,0,-nn.z,nn.y,0,-gn.z,gn.y,tn.z,0,-tn.x,nn.z,0,-nn.x,gn.z,0,-gn.x,-tn.y,tn.x,0,-nn.y,nn.x,0,-gn.y,gn.x,0];return!Ms(t,Un,Fn,Nn,Ei)||(t=[1,0,0,0,1,0,0,0,1],!Ms(t,Un,Fn,Nn,Ei))?!1:(bi.crossVectors(tn,nn),t=[bi.x,bi.y,bi.z],Ms(t,Un,Fn,Nn,Ei))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ut).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ut).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qt=[new P,new P,new P,new P,new P,new P,new P,new P],Ut=new P,yi=new Pn,Un=new P,Fn=new P,Nn=new P,tn=new P,nn=new P,gn=new P,hi=new P,Ei=new P,bi=new P,Bn=new P;function Ms(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Bn.fromArray(s,r);const a=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const kl=new Pn,ui=new P,Ss=new P;class ns{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kl.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ui.subVectors(e,this.center);const t=ui.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ui,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ui.copy(e.center).add(Ss)),this.expandByPoint(ui.copy(e.center).sub(Ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new P,ys=new P,Ti=new P,sn=new P,Es=new P,wi=new P,bs=new P;class sr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.origin).addScaledVector(this.direction,t),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ys.copy(e).add(t).multiplyScalar(.5),Ti.copy(t).sub(e).normalize(),sn.copy(this.origin).sub(ys);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ti),a=sn.dot(this.direction),l=-sn.dot(Ti),c=sn.lengthSq(),h=Math.abs(1-o*o);let u,p,m,B;if(h>0)if(u=o*l-a,p=o*a-l,B=r*h,u>=0)if(p>=-B)if(p<=B){const g=1/h;u*=g,p*=g,m=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p<=-B?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=B?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ys).addScaledVector(Ti,p),m}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const n=Yt.dot(this.direction),i=Yt.dot(Yt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,i=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,i=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,n,i,r){Es.subVectors(t,e),wi.subVectors(n,e),bs.crossVectors(Es,wi);let o=this.direction.dot(bs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sn.subVectors(this.origin,e);const l=a*this.direction.dot(wi.crossVectors(sn,wi));if(l<0)return null;const c=a*this.direction.dot(Es.cross(sn));if(c<0||l+c>o)return null;const h=-a*sn.dot(bs);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,i,r,o,a,l,c,h,u,p,m,B,g,f){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,p,m,B,g,f)}set(e,t,n,i,r,o,a,l,c,h,u,p,m,B,g,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=B,d[11]=g,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/On.setFromMatrixColumn(e,0).length(),r=1/On.setFromMatrixColumn(e,1).length(),o=1/On.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const p=o*h,m=o*u,B=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+B*c,t[5]=p-g*c,t[9]=-a*l,t[2]=g-p*c,t[6]=B+m*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*h,m=l*u,B=c*h,g=c*u;t[0]=p+g*a,t[4]=B*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-B,t[6]=g+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*h,m=l*u,B=c*h,g=c*u;t[0]=p-g*a,t[4]=-o*u,t[8]=B+m*a,t[1]=m+B*a,t[5]=o*h,t[9]=g-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*h,m=o*u,B=a*h,g=a*u;t[0]=l*h,t[4]=B*c-m,t[8]=p*c+g,t[1]=l*u,t[5]=g*c+p,t[9]=m*c-B,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,B=a*l,g=a*c;t[0]=l*h,t[4]=g-p*u,t[8]=B*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+B,t[10]=p-g*u}else if(e.order==="XZY"){const p=o*l,m=o*c,B=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+g,t[5]=o*h,t[9]=m*u-B,t[2]=B*u-m,t[6]=a*h,t[10]=g*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hl,e,zl)}lookAt(e,t,n){const i=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),rn.crossVectors(n,At),rn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),rn.crossVectors(n,At)),rn.normalize(),Ai.crossVectors(At,rn),i[0]=rn.x,i[4]=Ai.x,i[8]=At.x,i[1]=rn.y,i[5]=Ai.y,i[9]=At.y,i[2]=rn.z,i[6]=Ai.z,i[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],m=n[13],B=n[2],g=n[6],f=n[10],d=n[14],y=n[3],v=n[7],b=n[11],R=n[15],w=i[0],T=i[4],V=i[8],M=i[12],E=i[1],H=i[5],G=i[9],ee=i[13],C=i[2],O=i[6],z=i[10],q=i[14],W=i[3],X=i[7],Y=i[11],Q=i[15];return r[0]=o*w+a*E+l*C+c*W,r[4]=o*T+a*H+l*O+c*X,r[8]=o*V+a*G+l*z+c*Y,r[12]=o*M+a*ee+l*q+c*Q,r[1]=h*w+u*E+p*C+m*W,r[5]=h*T+u*H+p*O+m*X,r[9]=h*V+u*G+p*z+m*Y,r[13]=h*M+u*ee+p*q+m*Q,r[2]=B*w+g*E+f*C+d*W,r[6]=B*T+g*H+f*O+d*X,r[10]=B*V+g*G+f*z+d*Y,r[14]=B*M+g*ee+f*q+d*Q,r[3]=y*w+v*E+b*C+R*W,r[7]=y*T+v*H+b*O+R*X,r[11]=y*V+v*G+b*z+R*Y,r[15]=y*M+v*ee+b*q+R*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],m=e[14],B=e[3],g=e[7],f=e[11],d=e[15];return B*(+r*l*u-i*c*u-r*a*p+n*c*p+i*a*m-n*l*m)+g*(+t*l*m-t*c*p+r*o*p-i*o*m+i*c*h-r*l*h)+f*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+d*(-i*a*h-t*l*u+t*a*p+i*o*u-n*o*p+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],m=e[11],B=e[12],g=e[13],f=e[14],d=e[15],y=u*f*c-g*p*c+g*l*m-a*f*m-u*l*d+a*p*d,v=B*p*c-h*f*c-B*l*m+o*f*m+h*l*d-o*p*d,b=h*g*c-B*u*c+B*a*m-o*g*m-h*a*d+o*u*d,R=B*u*l-h*g*l-B*a*p+o*g*p+h*a*f-o*u*f,w=t*y+n*v+i*b+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(g*p*r-u*f*r-g*i*m+n*f*m+u*i*d-n*p*d)*T,e[2]=(a*f*r-g*l*r+g*i*c-n*f*c-a*i*d+n*l*d)*T,e[3]=(u*l*r-a*p*r-u*i*c+n*p*c+a*i*m-n*l*m)*T,e[4]=v*T,e[5]=(h*f*r-B*p*r+B*i*m-t*f*m-h*i*d+t*p*d)*T,e[6]=(B*l*r-o*f*r-B*i*c+t*f*c+o*i*d-t*l*d)*T,e[7]=(o*p*r-h*l*r+h*i*c-t*p*c-o*i*m+t*l*m)*T,e[8]=b*T,e[9]=(B*u*r-h*g*r-B*n*m+t*g*m+h*n*d-t*u*d)*T,e[10]=(o*g*r-B*a*r+B*n*c-t*g*c-o*n*d+t*a*d)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*m-t*a*m)*T,e[12]=R*T,e[13]=(h*g*i-B*u*i+B*n*p-t*g*p-h*n*f+t*u*f)*T,e[14]=(B*a*i-o*g*i-B*n*l+t*g*l+o*n*f-t*a*f)*T,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*p+t*a*p)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,p=r*c,m=r*h,B=r*u,g=o*h,f=o*u,d=a*u,y=l*c,v=l*h,b=l*u,R=n.x,w=n.y,T=n.z;return i[0]=(1-(g+d))*R,i[1]=(m+b)*R,i[2]=(B-v)*R,i[3]=0,i[4]=(m-b)*w,i[5]=(1-(p+d))*w,i[6]=(f+y)*w,i[7]=0,i[8]=(B+v)*T,i[9]=(f-y)*T,i[10]=(1-(p+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=On.set(i[0],i[1],i[2]).length();const o=On.set(i[4],i[5],i[6]).length(),a=On.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ft.copy(this);const c=1/r,h=1/o,u=1/a;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=h,Ft.elements[5]*=h,Ft.elements[6]*=h,Ft.elements[8]*=u,Ft.elements[9]*=u,Ft.elements[10]*=u,t.setFromRotationMatrix(Ft),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Qt){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),p=(n+i)/(n-i);let m,B;if(a===Qt)m=-(o+r)/(o-r),B=-2*o*r/(o-r);else if(a===Ji)m=-o/(o-r),B=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=B,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Qt){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),p=(t+e)*c,m=(n+i)*h;let B,g;if(a===Qt)B=(o+r)*u,g=-2*u;else if(a===Ji)B=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-B,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const On=new P,Ft=new it,Hl=new P(0,0,0),zl=new P(1,1,1),rn=new P,Ai=new P,At=new P,ra=new it,aa=new si;class is{constructor(e=0,t=0,n=0,i=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],p=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ra.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ra,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return aa.setFromEuler(this),this.setFromQuaternion(aa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class rr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gl=0;const oa=new P,kn=new si,$t=new it,Ri=new P,di=new P,Vl=new P,Wl=new si,la=new P(1,0,0),ca=new P(0,1,0),ha=new P(0,0,1),Xl={type:"added"},ql={type:"removed"};class st extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new P,t=new is,n=new si,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new Ne}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.multiply(kn),this}rotateOnWorldAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.premultiply(kn),this}rotateX(e){return this.rotateOnAxis(la,e)}rotateY(e){return this.rotateOnAxis(ca,e)}rotateZ(e){return this.rotateOnAxis(ha,e)}translateOnAxis(e,t){return oa.copy(e).applyQuaternion(this.quaternion),this.position.add(oa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(la,e)}translateY(e){return this.translateOnAxis(ca,e)}translateZ(e){return this.translateOnAxis(ha,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ri.copy(e):Ri.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(di,Ri,this.up):$t.lookAt(Ri,di,this.up),this.quaternion.setFromRotationMatrix($t),i&&($t.extractRotation(i.matrixWorld),kn.setFromRotationMatrix($t),this.quaternion.premultiply(kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ql)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,e,Vl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,Wl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),m=o(e.animations),B=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),B.length>0&&(n.nodes=B)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DEFAULT_UP=new P(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nt=new P,Kt=new P,Ts=new P,jt=new P,Hn=new P,zn=new P,ua=new P,ws=new P,As=new P,Rs=new P;let Ci=!1;class Ot{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nt.subVectors(e,t),i.cross(Nt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Nt.subVectors(i,t),Kt.subVectors(n,t),Ts.subVectors(e,t);const o=Nt.dot(Nt),a=Nt.dot(Kt),l=Nt.dot(Ts),c=Kt.dot(Kt),h=Kt.dot(Ts),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const p=1/u,m=(c*l-a*h)*p,B=(o*h-a*l)*p;return r.set(1-m-B,B,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jt)===null?!1:jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getUV(e,t,n,i,r,o,a,l){return Ci===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ci=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,jt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jt.x),l.addScaledVector(o,jt.y),l.addScaledVector(a,jt.z),l)}static isFrontFacing(e,t,n,i){return Nt.subVectors(n,t),Kt.subVectors(e,t),Nt.cross(Kt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),Nt.cross(Kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ot.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ci===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ci=!0),Ot.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Ot.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Hn.subVectors(i,n),zn.subVectors(r,n),ws.subVectors(e,n);const l=Hn.dot(ws),c=zn.dot(ws);if(l<=0&&c<=0)return t.copy(n);As.subVectors(e,i);const h=Hn.dot(As),u=zn.dot(As);if(h>=0&&u<=h)return t.copy(i);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Hn,o);Rs.subVectors(e,r);const m=Hn.dot(Rs),B=zn.dot(Rs);if(B>=0&&m<=B)return t.copy(r);const g=m*c-l*B;if(g<=0&&c>=0&&B<=0)return a=c/(c-B),t.copy(n).addScaledVector(zn,a);const f=h*B-m*u;if(f<=0&&u-h>=0&&m-B>=0)return ua.subVectors(r,i),a=(u-h)/(u-h+(m-B)),t.copy(i).addScaledVector(ua,a);const d=1/(f+g+p);return o=g*d,a=p*d,t.copy(n).addScaledVector(Hn,o).addScaledVector(zn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const co={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},Li={h:0,s:0,l:0};function Cs(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=Pl(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Cs(o,r,e+1/3),this.g=Cs(o,r,e),this.b=Cs(o,r,e-1/3)}return We.toWorkingColorSpace(this,i),this}setStyle(e,t=nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){const n=co[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return We.fromWorkingColorSpace(mt.copy(this),e),Math.round(bt(mt.r*255,0,255))*65536+Math.round(bt(mt.g*255,0,255))*256+Math.round(bt(mt.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,i=mt.g,r=mt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=nt){We.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,i=mt.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(an),this.setHSL(an.h+e,an.s+t,an.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(Li);const n=gs(an.h,Li.h,t),i=gs(an.s,Li.s,t),r=gs(an.l,Li.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new ze;ze.NAMES=co;let Yl=0;class ri extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Zn,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gs,this.blendDst=Vs,this.blendEquation=En,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dn,this.stencilZFail=Dn,this.stencilZPass=Dn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gs&&(n.blendSrc=this.blendSrc),this.blendDst!==Vs&&(n.blendDst=this.blendDst),this.blendEquation!==En&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Dn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Dn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fn extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new P,Pi=new ke;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pi.fromBufferAttribute(this,t),Pi.applyMatrix3(e),this.setXY(t,Pi.x,Pi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jr&&(e.usage=this.usage),e}}class ho extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uo extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $l=0;const Dt=new it,Ls=new st,Gn=new P,Rt=new Pn,fi=new Pn,ct=new P;class Lt extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ro(e)?uo:ho)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return Ls.lookAt(e),Ls.updateMatrix(),this.applyMatrix4(Ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gn).negate(),this.translate(Gn.x,Gn.y,Gn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Rt.setFromBufferAttribute(r),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];fi.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(Rt.min,fi.min),Rt.expandByPoint(ct),ct.addVectors(Rt.max,fi.max),Rt.expandByPoint(ct)):(Rt.expandByPoint(fi.min),Rt.expandByPoint(fi.max))}Rt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ct));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ct.fromBufferAttribute(a,c),l&&(Gn.fromBufferAttribute(e,c),ct.add(Gn)),i=Math.max(i,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new P,h[E]=new P;const u=new P,p=new P,m=new P,B=new ke,g=new ke,f=new ke,d=new P,y=new P;function v(E,H,G){u.fromArray(i,E*3),p.fromArray(i,H*3),m.fromArray(i,G*3),B.fromArray(o,E*2),g.fromArray(o,H*2),f.fromArray(o,G*2),p.sub(u),m.sub(u),g.sub(B),f.sub(B);const ee=1/(g.x*f.y-f.x*g.y);isFinite(ee)&&(d.copy(p).multiplyScalar(f.y).addScaledVector(m,-g.y).multiplyScalar(ee),y.copy(m).multiplyScalar(g.x).addScaledVector(p,-f.x).multiplyScalar(ee),c[E].add(d),c[H].add(d),c[G].add(d),h[E].add(y),h[H].add(y),h[G].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let E=0,H=b.length;E<H;++E){const G=b[E],ee=G.start,C=G.count;for(let O=ee,z=ee+C;O<z;O+=3)v(n[O+0],n[O+1],n[O+2])}const R=new P,w=new P,T=new P,V=new P;function M(E){T.fromArray(r,E*3),V.copy(T);const H=c[E];R.copy(H),R.sub(T.multiplyScalar(T.dot(H))).normalize(),w.crossVectors(V,H);const ee=w.dot(h[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=ee}for(let E=0,H=b.length;E<H;++E){const G=b[E],ee=G.start,C=G.count;for(let O=ee,z=ee+C;O<z;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let p=0,m=e.count;p<m;p+=3){const B=e.getX(p+0),g=e.getX(p+1),f=e.getX(p+2);i.fromBufferAttribute(t,B),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,f),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,B),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(B,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)i.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h);let m=0,B=0;for(let g=0,f=l.length;g<f;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let d=0;d<h;d++)p[B++]=c[m++]}return new Ct(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const p=c[h],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const da=new it,_n=new sr,Di=new ns,fa=new P,Vn=new P,Wn=new P,Xn=new P,Ps=new P,Ii=new P,Ui=new ke,Fi=new ke,Ni=new ke,pa=new P,ma=new P,ga=new P,Oi=new P,ki=new P;class Ke extends st{constructor(e=new Lt,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ii.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ps.fromBufferAttribute(u,e),o?Ii.addScaledVector(Ps,h):Ii.addScaledVector(Ps.sub(t),h))}t.add(Ii)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Di.copy(n.boundingSphere),Di.applyMatrix4(r),_n.copy(e.ray).recast(e.near),!(Di.containsPoint(_n.origin)===!1&&(_n.intersectSphere(Di,fa)===null||_n.origin.distanceToSquared(fa)>(e.far-e.near)**2))&&(da.copy(r).invert(),_n.copy(e.ray).applyMatrix4(da),!(n.boundingBox!==null&&_n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_n)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let B=0,g=p.length;B<g;B++){const f=p[B],d=o[f.materialIndex],y=Math.max(f.start,m.start),v=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let b=y,R=v;b<R;b+=3){const w=a.getX(b),T=a.getX(b+1),V=a.getX(b+2);i=Hi(this,d,e,n,c,h,u,w,T,V),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const B=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let f=B,d=g;f<d;f+=3){const y=a.getX(f),v=a.getX(f+1),b=a.getX(f+2);i=Hi(this,o,e,n,c,h,u,y,v,b),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let B=0,g=p.length;B<g;B++){const f=p[B],d=o[f.materialIndex],y=Math.max(f.start,m.start),v=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let b=y,R=v;b<R;b+=3){const w=b,T=b+1,V=b+2;i=Hi(this,d,e,n,c,h,u,w,T,V),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const B=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let f=B,d=g;f<d;f+=3){const y=f,v=f+1,b=f+2;i=Hi(this,o,e,n,c,h,u,y,v,b),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function Kl(s,e,t,n,i,r,o,a){let l;if(e.side===Tt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===dn,a),l===null)return null;ki.copy(a),ki.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ki);return c<t.near||c>t.far?null:{distance:c,point:ki.clone(),object:s}}function Hi(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Vn),s.getVertexPosition(l,Wn),s.getVertexPosition(c,Xn);const h=Kl(s,e,t,n,Vn,Wn,Xn,Oi);if(h){i&&(Ui.fromBufferAttribute(i,a),Fi.fromBufferAttribute(i,l),Ni.fromBufferAttribute(i,c),h.uv=Ot.getInterpolation(Oi,Vn,Wn,Xn,Ui,Fi,Ni,new ke)),r&&(Ui.fromBufferAttribute(r,a),Fi.fromBufferAttribute(r,l),Ni.fromBufferAttribute(r,c),h.uv1=Ot.getInterpolation(Oi,Vn,Wn,Xn,Ui,Fi,Ni,new ke),h.uv2=h.uv1),o&&(pa.fromBufferAttribute(o,a),ma.fromBufferAttribute(o,l),ga.fromBufferAttribute(o,c),h.normal=Ot.getInterpolation(Oi,Vn,Wn,Xn,pa,ma,ga,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};Ot.getNormal(Vn,Wn,Xn,u.normal),h.face=u}return h}class ai extends Lt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let p=0,m=0;B("z","y","x",-1,-1,n,t,e,o,r,0),B("z","y","x",1,-1,n,t,-e,o,r,1),B("x","z","y",1,1,e,n,t,i,o,2),B("x","z","y",1,-1,e,n,-t,i,o,3),B("x","y","z",1,-1,e,t,n,i,r,4),B("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(u,2));function B(g,f,d,y,v,b,R,w,T,V,M){const E=b/T,H=R/V,G=b/2,ee=R/2,C=w/2,O=T+1,z=V+1;let q=0,W=0;const X=new P;for(let Y=0;Y<z;Y++){const Q=Y*H-ee;for(let te=0;te<O;te++){const k=te*E-G;X[g]=k*y,X[f]=Q*v,X[d]=C,c.push(X.x,X.y,X.z),X[g]=0,X[f]=0,X[d]=w>0?1:-1,h.push(X.x,X.y,X.z),u.push(te/T),u.push(1-Y/V),q+=1}}for(let Y=0;Y<V;Y++)for(let Q=0;Q<T;Q++){const te=p+Q+O*Y,k=p+Q+O*(Y+1),$=p+(Q+1)+O*(Y+1),oe=p+(Q+1)+O*Y;l.push(te,k,oe),l.push(k,$,oe),W+=6}a.addGroup(m,W,M),m+=W,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ni(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mt(s){const e={};for(let t=0;t<s.length;t++){const n=ni(s[t]);for(const i in n)e[i]=n[i]}return e}function jl(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function fo(s){return s.getRenderTarget()===null?s.outputColorSpace:We.workingColorSpace}const Zl={clone:ni,merge:Mt};var Jl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ql=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jl,this.fragmentShader=Ql,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ni(e.uniforms),this.uniformsGroups=jl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class po extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Qt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends po{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ms*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qn=-90,Yn=1;class ec extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kt(qn,Yn,e,t);i.layers=this.layers,this.add(i);const r=new kt(qn,Yn,e,t);r.layers=this.layers,this.add(r);const o=new kt(qn,Yn,e,t);o.layers=this.layers,this.add(o);const a=new kt(qn,Yn,e,t);a.layers=this.layers,this.add(a);const l=new kt(qn,Yn,e,t);l.layers=this.layers,this.add(l);const c=new kt(qn,Yn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Qt)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),B=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,p,m),e.xr.enabled=B,n.texture.needsPMREMUpdate=!0}}class mo extends St{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Qn,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tc extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(pi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Rn?nt:It),this.texture=new mo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ai(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:cn});r.uniforms.tEquirect.value=t;const o=new Ke(i,r),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=Et),new ec(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ds=new P,nc=new P,ic=new Ne;class Sn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ds.subVectors(n,t).cross(nc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ds),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ic.getNormalMatrix(e),i=this.coplanarPoint(Ds).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vn=new ns,zi=new P;class ar{constructor(e=new Sn,t=new Sn,n=new Sn,i=new Sn,r=new Sn,o=new Sn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qt){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],p=i[7],m=i[8],B=i[9],g=i[10],f=i[11],d=i[12],y=i[13],v=i[14],b=i[15];if(n[0].setComponents(l-r,p-c,f-m,b-d).normalize(),n[1].setComponents(l+r,p+c,f+m,b+d).normalize(),n[2].setComponents(l+o,p+h,f+B,b+y).normalize(),n[3].setComponents(l-o,p-h,f-B,b-y).normalize(),n[4].setComponents(l-a,p-u,f-g,b-v).normalize(),t===Qt)n[5].setComponents(l+a,p+u,f+g,b+v).normalize();else if(t===Ji)n[5].setComponents(a,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vn)}intersectsSprite(e){return vn.center.set(0,0,0),vn.radius=.7071067811865476,vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(vn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(zi.x=i.normal.x>0?e.max.x:e.min.x,zi.y=i.normal.y>0?e.max.y:e.min.y,zi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(zi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function go(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function sc(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,p=c.usage,m=u.byteLength,B=s.createBuffer();s.bindBuffer(h,B),s.bufferData(h,u,p),c.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:B,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){const p=h.array,m=h._updateRange,B=h.updateRanges;if(s.bindBuffer(u,c),m.count===-1&&B.length===0&&s.bufferSubData(u,0,p),B.length!==0){for(let g=0,f=B.length;g<f;g++){const d=B[g];t?s.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):s.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):s.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class gt extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,p=t/l,m=[],B=[],g=[],f=[];for(let d=0;d<h;d++){const y=d*p-o;for(let v=0;v<c;v++){const b=v*u-r;B.push(b,-y,0),g.push(0,0,1),f.push(v/a),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const v=y+c*d,b=y+c*(d+1),R=y+1+c*(d+1),w=y+1+c*d;m.push(v,b,w),m.push(b,R,w)}this.setIndex(m),this.setAttribute("position",new Bt(B,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.widthSegments,e.heightSegments)}}var rc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ac=`#ifdef USE_ALPHAHASH
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
#endif`,oc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uc=`#ifdef USE_AOMAP
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
#endif`,dc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fc=`#ifdef USE_BATCHING
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
#endif`,pc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_c=`#ifdef USE_IRIDESCENCE
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
#endif`,vc=`#ifdef USE_BUMPMAP
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
#endif`,xc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ec=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ac=`#define PI 3.141592653589793
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
} // validated`,Rc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cc=`vec3 transformedNormal = objectNormal;
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
#endif`,Lc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ic=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fc=`
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
}`,Nc=`#ifdef USE_ENVMAP
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
#endif`,Oc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kc=`#ifdef USE_ENVMAP
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
#endif`,Hc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zc=`#ifdef USE_ENVMAP
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
#endif`,Gc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qc=`#ifdef USE_GRADIENTMAP
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
}`,Yc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$c=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zc=`uniform bool receiveShadow;
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
#endif`,Jc=`#ifdef USE_ENVMAP
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
#endif`,Qc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,th=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ih=`PhysicalMaterial material;
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
#endif`,sh=`struct PhysicalMaterial {
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
}`,rh=`
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
#endif`,ah=`#if defined( RE_IndirectDiffuse )
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
#endif`,oh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ch=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ph=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mh=`#if defined( USE_POINTS_UV )
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
#endif`,gh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_h=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vh=`#ifdef USE_MORPHNORMALS
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
#endif`,xh=`#ifdef USE_MORPHTARGETS
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
#endif`,Mh=`#ifdef USE_MORPHTARGETS
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
#endif`,Sh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Th=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wh=`#ifdef USE_NORMALMAP
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
#endif`,Ah=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ch=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ph=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ih=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vh=`float getShadowMask() {
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
}`,Wh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xh=`#ifdef USE_SKINNING
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
#endif`,qh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yh=`#ifdef USE_SKINNING
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
#endif`,$h=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jh=`#ifdef USE_TRANSMISSION
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
#endif`,Qh=`#ifdef USE_TRANSMISSION
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
#endif`,eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const su=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ru=`uniform sampler2D t2D;
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
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ou=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hu=`#include <common>
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
}`,uu=`#if DEPTH_PACKING == 3200
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
}`,du=`#define DISTANCE
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
}`,fu=`#define DISTANCE
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
}`,pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gu=`uniform float scale;
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
}`,Bu=`uniform vec3 diffuse;
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
}`,_u=`#include <common>
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
}`,vu=`uniform vec3 diffuse;
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
}`,xu=`#define LAMBERT
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
}`,Mu=`#define LAMBERT
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
}`,Su=`#define MATCAP
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
}`,yu=`#define MATCAP
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
}`,Eu=`#define NORMAL
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
}`,bu=`#define NORMAL
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
}`,Tu=`#define PHONG
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
}`,wu=`#define PHONG
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
}`,Au=`#define STANDARD
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
}`,Ru=`#define STANDARD
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
}`,Cu=`#define TOON
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
}`,Lu=`#define TOON
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
}`,Pu=`uniform float size;
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
}`,Du=`uniform vec3 diffuse;
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
}`,Iu=`#include <common>
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
}`,Uu=`uniform vec3 color;
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
}`,Fu=`uniform float rotation;
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
}`,Nu=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:rc,alphahash_pars_fragment:ac,alphamap_fragment:oc,alphamap_pars_fragment:lc,alphatest_fragment:cc,alphatest_pars_fragment:hc,aomap_fragment:uc,aomap_pars_fragment:dc,batching_pars_vertex:fc,batching_vertex:pc,begin_vertex:mc,beginnormal_vertex:gc,bsdfs:Bc,iridescence_fragment:_c,bumpmap_pars_fragment:vc,clipping_planes_fragment:xc,clipping_planes_pars_fragment:Mc,clipping_planes_pars_vertex:Sc,clipping_planes_vertex:yc,color_fragment:Ec,color_pars_fragment:bc,color_pars_vertex:Tc,color_vertex:wc,common:Ac,cube_uv_reflection_fragment:Rc,defaultnormal_vertex:Cc,displacementmap_pars_vertex:Lc,displacementmap_vertex:Pc,emissivemap_fragment:Dc,emissivemap_pars_fragment:Ic,colorspace_fragment:Uc,colorspace_pars_fragment:Fc,envmap_fragment:Nc,envmap_common_pars_fragment:Oc,envmap_pars_fragment:kc,envmap_pars_vertex:Hc,envmap_physical_pars_fragment:Jc,envmap_vertex:zc,fog_vertex:Gc,fog_pars_vertex:Vc,fog_fragment:Wc,fog_pars_fragment:Xc,gradientmap_pars_fragment:qc,lightmap_fragment:Yc,lightmap_pars_fragment:$c,lights_lambert_fragment:Kc,lights_lambert_pars_fragment:jc,lights_pars_begin:Zc,lights_toon_fragment:Qc,lights_toon_pars_fragment:eh,lights_phong_fragment:th,lights_phong_pars_fragment:nh,lights_physical_fragment:ih,lights_physical_pars_fragment:sh,lights_fragment_begin:rh,lights_fragment_maps:ah,lights_fragment_end:oh,logdepthbuf_fragment:lh,logdepthbuf_pars_fragment:ch,logdepthbuf_pars_vertex:hh,logdepthbuf_vertex:uh,map_fragment:dh,map_pars_fragment:fh,map_particle_fragment:ph,map_particle_pars_fragment:mh,metalnessmap_fragment:gh,metalnessmap_pars_fragment:Bh,morphcolor_vertex:_h,morphnormal_vertex:vh,morphtarget_pars_vertex:xh,morphtarget_vertex:Mh,normal_fragment_begin:Sh,normal_fragment_maps:yh,normal_pars_fragment:Eh,normal_pars_vertex:bh,normal_vertex:Th,normalmap_pars_fragment:wh,clearcoat_normal_fragment_begin:Ah,clearcoat_normal_fragment_maps:Rh,clearcoat_pars_fragment:Ch,iridescence_pars_fragment:Lh,opaque_fragment:Ph,packing:Dh,premultiplied_alpha_fragment:Ih,project_vertex:Uh,dithering_fragment:Fh,dithering_pars_fragment:Nh,roughnessmap_fragment:Oh,roughnessmap_pars_fragment:kh,shadowmap_pars_fragment:Hh,shadowmap_pars_vertex:zh,shadowmap_vertex:Gh,shadowmask_pars_fragment:Vh,skinbase_vertex:Wh,skinning_pars_vertex:Xh,skinning_vertex:qh,skinnormal_vertex:Yh,specularmap_fragment:$h,specularmap_pars_fragment:Kh,tonemapping_fragment:jh,tonemapping_pars_fragment:Zh,transmission_fragment:Jh,transmission_pars_fragment:Qh,uv_pars_fragment:eu,uv_pars_vertex:tu,uv_vertex:nu,worldpos_vertex:iu,background_vert:su,background_frag:ru,backgroundCube_vert:au,backgroundCube_frag:ou,cube_vert:lu,cube_frag:cu,depth_vert:hu,depth_frag:uu,distanceRGBA_vert:du,distanceRGBA_frag:fu,equirect_vert:pu,equirect_frag:mu,linedashed_vert:gu,linedashed_frag:Bu,meshbasic_vert:_u,meshbasic_frag:vu,meshlambert_vert:xu,meshlambert_frag:Mu,meshmatcap_vert:Su,meshmatcap_frag:yu,meshnormal_vert:Eu,meshnormal_frag:bu,meshphong_vert:Tu,meshphong_frag:wu,meshphysical_vert:Au,meshphysical_frag:Ru,meshtoon_vert:Cu,meshtoon_frag:Lu,points_vert:Pu,points_frag:Du,shadow_vert:Iu,shadow_frag:Uu,sprite_vert:Fu,sprite_frag:Nu},ie={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Vt={basic:{uniforms:Mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ze(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Mt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Mt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ze(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Mt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Mt([ie.points,ie.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Mt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Mt([ie.common,ie.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Mt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Mt([ie.sprite,ie.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Mt([ie.common,ie.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Mt([ie.lights,ie.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Vt.physical={uniforms:Mt([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Gi={r:0,b:0,g:0};function Ou(s,e,t,n,i,r,o){const a=new ze(0);let l=r===!0?0:1,c,h,u=null,p=0,m=null;function B(f,d){let y=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),y=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===es)?(h===void 0&&(h=new Ke(new ai(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:ni(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=We.getTransfer(v.colorSpace)!==$e,(u!==v||p!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,p=v.version,m=s.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ke(new gt(2,2),new Ln({name:"BackgroundMaterial",uniforms:ni(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=We.getTransfer(v.colorSpace)!==$e,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||p!==v.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,p=v.version,m=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function g(f,d){f.getRGB(Gi,fo(s)),n.buffers.color.setClear(Gi.r,Gi.g,Gi.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(f,d=1){a.set(f),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,g(a,l)},render:B}}function ku(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=f(null);let c=l,h=!1;function u(C,O,z,q,W){let X=!1;if(o){const Y=g(q,z,O);c!==Y&&(c=Y,m(c.object)),X=d(C,q,z,W),X&&y(C,q,z,W)}else{const Y=O.wireframe===!0;(c.geometry!==q.id||c.program!==z.id||c.wireframe!==Y)&&(c.geometry=q.id,c.program=z.id,c.wireframe=Y,X=!0)}W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,V(C,O,z,q),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function p(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(C){return n.isWebGL2?s.bindVertexArray(C):r.bindVertexArrayOES(C)}function B(C){return n.isWebGL2?s.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function g(C,O,z){const q=z.wireframe===!0;let W=a[C.id];W===void 0&&(W={},a[C.id]=W);let X=W[O.id];X===void 0&&(X={},W[O.id]=X);let Y=X[q];return Y===void 0&&(Y=f(p()),X[q]=Y),Y}function f(C){const O=[],z=[],q=[];for(let W=0;W<i;W++)O[W]=0,z[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:q,object:C,attributes:{},index:null}}function d(C,O,z,q){const W=c.attributes,X=O.attributes;let Y=0;const Q=z.getAttributes();for(const te in Q)if(Q[te].location>=0){const $=W[te];let oe=X[te];if(oe===void 0&&(te==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),te==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor)),$===void 0||$.attribute!==oe||oe&&$.data!==oe.data)return!0;Y++}return c.attributesNum!==Y||c.index!==q}function y(C,O,z,q){const W={},X=O.attributes;let Y=0;const Q=z.getAttributes();for(const te in Q)if(Q[te].location>=0){let $=X[te];$===void 0&&(te==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),te==="instanceColor"&&C.instanceColor&&($=C.instanceColor));const oe={};oe.attribute=$,$&&$.data&&(oe.data=$.data),W[te]=oe,Y++}c.attributes=W,c.attributesNum=Y,c.index=q}function v(){const C=c.newAttributes;for(let O=0,z=C.length;O<z;O++)C[O]=0}function b(C){R(C,0)}function R(C,O){const z=c.newAttributes,q=c.enabledAttributes,W=c.attributeDivisors;z[C]=1,q[C]===0&&(s.enableVertexAttribArray(C),q[C]=1),W[C]!==O&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,O),W[C]=O)}function w(){const C=c.newAttributes,O=c.enabledAttributes;for(let z=0,q=O.length;z<q;z++)O[z]!==C[z]&&(s.disableVertexAttribArray(z),O[z]=0)}function T(C,O,z,q,W,X,Y){Y===!0?s.vertexAttribIPointer(C,O,z,W,X):s.vertexAttribPointer(C,O,z,q,W,X)}function V(C,O,z,q){if(n.isWebGL2===!1&&(C.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=q.attributes,X=z.getAttributes(),Y=O.defaultAttributeValues;for(const Q in X){const te=X[Q];if(te.location>=0){let k=W[Q];if(k===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),k!==void 0){const $=k.normalized,oe=k.itemSize,me=t.get(k);if(me===void 0)continue;const pe=me.buffer,we=me.type,Re=me.bytesPerElement,Me=n.isWebGL2===!0&&(we===s.INT||we===s.UNSIGNED_INT||k.gpuType===Ka);if(k.isInterleavedBufferAttribute){const He=k.data,D=He.stride,_t=k.offset;if(He.isInstancedInterleavedBuffer){for(let Be=0;Be<te.locationSize;Be++)R(te.location+Be,He.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Be=0;Be<te.locationSize;Be++)b(te.location+Be);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let Be=0;Be<te.locationSize;Be++)T(te.location+Be,oe/te.locationSize,we,$,D*Re,(_t+oe/te.locationSize*Be)*Re,Me)}else{if(k.isInstancedBufferAttribute){for(let He=0;He<te.locationSize;He++)R(te.location+He,k.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let He=0;He<te.locationSize;He++)b(te.location+He);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let He=0;He<te.locationSize;He++)T(te.location+He,oe/te.locationSize,we,$,oe*Re,oe/te.locationSize*He*Re,Me)}}else if(Y!==void 0){const $=Y[Q];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(te.location,$);break;case 3:s.vertexAttrib3fv(te.location,$);break;case 4:s.vertexAttrib4fv(te.location,$);break;default:s.vertexAttrib1fv(te.location,$)}}}}w()}function M(){G();for(const C in a){const O=a[C];for(const z in O){const q=O[z];for(const W in q)B(q[W].object),delete q[W];delete O[z]}delete a[C]}}function E(C){if(a[C.id]===void 0)return;const O=a[C.id];for(const z in O){const q=O[z];for(const W in q)B(q[W].object),delete q[W];delete O[z]}delete a[C.id]}function H(C){for(const O in a){const z=a[O];if(z[C.id]===void 0)continue;const q=z[C.id];for(const W in q)B(q[W].object),delete q[W];delete z[C.id]}}function G(){ee(),h=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:ee,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:H,initAttributes:v,enableAttribute:b,disableUnusedAttributes:w}}function Hu(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,p){if(p===0)return;let m,B;if(i)m=s,B="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),B="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[B](r,h,u,p),t.update(u,r,p)}function c(h,u,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let B=0;B<p;B++)this.render(h[B],u[B]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,p);let B=0;for(let g=0;g<p;g++)B+=u[g];t.update(B,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function zu(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),B=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,b=o||e.has("OES_texture_float"),R=v&&b,w=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:B,maxAttributes:g,maxVertexUniforms:f,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:w}}function Gu(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Sn,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||i;return i=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){const B=u.clippingPlanes,g=u.clipIntersection,f=u.clipShadows,d=s.get(u);if(!i||B===null||B.length===0||r&&!f)r?h(null):c();else{const y=r?0:n,v=y*4;let b=d.clippingState||null;l.value=b,b=h(B,p,v,m);for(let R=0;R!==v;++R)b[R]=t[R];d.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,m,B){const g=u!==null?u.length:0;let f=null;if(g!==0){if(f=l.value,B!==!0||f===null){const d=m+g*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<d)&&(f=new Float32Array(d));for(let v=0,b=m;v!==g;++v,b+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(f,b),f[b+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,f}}function Vu(s){let e=new WeakMap;function t(o,a){return a===Ws?o.mapping=Qn:a===Xs&&(o.mapping=ei),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ws||a===Xs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tc(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class or extends po{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Kn=4,Ba=[.125,.215,.35,.446,.526,.582],bn=20,Is=new or,_a=new ze;let Us=null,Fs=0,Ns=0;const yn=(1+Math.sqrt(5))/2,$n=1/yn,va=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,yn,$n),new P(0,yn,-$n),new P($n,0,yn),new P(-$n,0,yn),new P(yn,$n,0),new P(-yn,$n,0)];class xa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Us=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Ns=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Us,Fs,Ns),e.scissorTest=!1,Vi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qn||e.mapping===ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Us=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Ns=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:gi,format:zt,colorSpace:en,depthBuffer:!1},i=Ma(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ma(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wu(r)),this._blurMaterial=Xu(r,e,t)}return i}_compileMaterial(e){const t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,Is)}_sceneToCubeUV(e,t,n,i){const a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(_a),h.toneMapping=hn,h.autoClear=!1;const m=new fn({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),B=new Ke(new ai,m);let g=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,g=!0):(m.color.copy(_a),g=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Vi(i,y*v,d>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(B,a),h.render(e,a)}B.geometry.dispose(),B.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qn||e.mapping===ei;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sa());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Vi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Is)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=va[(i-1)%va.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ke(this._lodPlanes[i],c),p=c.uniforms,m=this._sizeLods[n]-1,B=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*bn-1),g=r/B,f=isFinite(r)?1+Math.floor(h*g):bn;f>bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${bn}`);const d=[];let y=0;for(let T=0;T<bn;++T){const V=T/g,M=Math.exp(-V*V/2);d.push(M),T===0?y+=M:T<f&&(y+=2*M)}for(let T=0;T<d.length;T++)d[T]=d[T]/y;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=B,p.mipInt.value=v-n;const b=this._sizeLods[i],R=3*b*(i>v-Kn?i-v+Kn:0),w=4*(this._cubeSize-b);Vi(t,R,w,3*b,2*b),l.setRenderTarget(t),l.render(u,Is)}}function Wu(s){const e=[],t=[],n=[];let i=s;const r=s-Kn+1+Ba.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Kn?l=Ba[o-s+Kn-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,B=6,g=3,f=2,d=1,y=new Float32Array(g*B*m),v=new Float32Array(f*B*m),b=new Float32Array(d*B*m);for(let w=0;w<m;w++){const T=w%3*2/3-1,V=w>2?0:-1,M=[T,V,0,T+2/3,V,0,T+2/3,V+1,0,T,V,0,T+2/3,V+1,0,T,V+1,0];y.set(M,g*B*w),v.set(p,f*B*w);const E=[w,w,w,w,w,w];b.set(E,d*B*w)}const R=new Lt;R.setAttribute("position",new Ct(y,g)),R.setAttribute("uv",new Ct(v,f)),R.setAttribute("faceIndex",new Ct(b,d)),e.push(R),i>Kn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ma(s,e,t){const n=new Cn(s,e,t);return n.texture.mapping=es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Xu(s,e,t){const n=new Float32Array(bn),i=new P(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lr(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Sa(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lr(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function ya(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function lr(){return`

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
	`}function qu(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ws||l===Xs,h=l===Qn||l===ei;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new xa(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new xa(s));const p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Yu(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $u(s,e,t,n){const i={},r=new WeakMap;function o(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const B in p.attributes)e.remove(p.attributes[B]);for(const B in p.morphAttributes){const g=p.morphAttributes[B];for(let f=0,d=g.length;f<d;f++)e.remove(g[f])}p.removeEventListener("dispose",o),delete i[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return i[p.id]===!0||(p.addEventListener("dispose",o),i[p.id]=!0,t.memory.geometries++),p}function l(u){const p=u.attributes;for(const B in p)e.update(p[B],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const B in m){const g=m[B];for(let f=0,d=g.length;f<d;f++)e.update(g[f],s.ARRAY_BUFFER)}}function c(u){const p=[],m=u.index,B=u.attributes.position;let g=0;if(m!==null){const y=m.array;g=m.version;for(let v=0,b=y.length;v<b;v+=3){const R=y[v+0],w=y[v+1],T=y[v+2];p.push(R,w,w,T,T,R)}}else if(B!==void 0){const y=B.array;g=B.version;for(let v=0,b=y.length/3-1;v<b;v+=3){const R=v+0,w=v+1,T=v+2;p.push(R,w,w,T,T,R)}}else return;const f=new(ro(p)?uo:ho)(p,1);f.version=g;const d=r.get(u);d&&e.remove(d),r.set(u,f)}function h(u){const p=r.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ku(s,e,t,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,B){s.drawElements(r,B,a,m*l),t.update(B,r,1)}function u(m,B,g){if(g===0)return;let f,d;if(i)f=s,d="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,B,a,m*l,g),t.update(B,r,g)}function p(m,B,g){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<g;d++)this.render(m[d]/l,B[d]);else{f.multiDrawElementsWEBGL(r,B,0,a,m,0,g);let d=0;for(let y=0;y<g;y++)d+=B[y];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function ju(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zu(s,e){return s[0]-e[0]}function Ju(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Qu(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const B=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=B!==void 0?B.length:0;let f=r.get(h);if(f===void 0||f.count!==g){let O=function(){ee.dispose(),r.delete(h),h.removeEventListener("dispose",O)};var m=O;f!==void 0&&f.texture.dispose();const v=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],V=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),b===!0&&(M=2),R===!0&&(M=3);let E=h.attributes.position.count*M,H=1;E>e.maxTextureSize&&(H=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const G=new Float32Array(E*H*4*g),ee=new lo(G,E,H,g);ee.type=ln,ee.needsUpdate=!0;const C=M*4;for(let z=0;z<g;z++){const q=w[z],W=T[z],X=V[z],Y=E*H*4*z;for(let Q=0;Q<q.count;Q++){const te=Q*C;v===!0&&(o.fromBufferAttribute(q,Q),G[Y+te+0]=o.x,G[Y+te+1]=o.y,G[Y+te+2]=o.z,G[Y+te+3]=0),b===!0&&(o.fromBufferAttribute(W,Q),G[Y+te+4]=o.x,G[Y+te+5]=o.y,G[Y+te+6]=o.z,G[Y+te+7]=0),R===!0&&(o.fromBufferAttribute(X,Q),G[Y+te+8]=o.x,G[Y+te+9]=o.y,G[Y+te+10]=o.z,G[Y+te+11]=X.itemSize===4?o.w:1)}}f={count:g,texture:ee,size:new ke(E,H)},r.set(h,f),h.addEventListener("dispose",O)}let d=0;for(let v=0;v<p.length;v++)d+=p[v];const y=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",p),u.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const B=p===void 0?0:p.length;let g=n[h.id];if(g===void 0||g.length!==B){g=[];for(let b=0;b<B;b++)g[b]=[b,0];n[h.id]=g}for(let b=0;b<B;b++){const R=g[b];R[0]=b,R[1]=p[b]}g.sort(Ju);for(let b=0;b<8;b++)b<B&&g[b][1]?(a[b][0]=g[b][0],a[b][1]=g[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Zu);const f=h.morphAttributes.position,d=h.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const R=a[b],w=R[0],T=R[1];w!==Number.MAX_SAFE_INTEGER&&T?(f&&h.getAttribute("morphTarget"+b)!==f[w]&&h.setAttribute("morphTarget"+b,f[w]),d&&h.getAttribute("morphNormal"+b)!==d[w]&&h.setAttribute("morphNormal"+b,d[w]),i[b]=T,y+=T):(f&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),d&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}const v=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function ed(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Bo extends St{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:An,h!==An&&h!==ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===An&&(n=on),n===void 0&&h===ti&&(n=wn),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dt,this.minFilter=l!==void 0?l:dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _o=new St,vo=new Bo(1,1);vo.compareFunction=so;const xo=new lo,Mo=new Ol,So=new mo,Ea=[],ba=[],Ta=new Float32Array(16),wa=new Float32Array(9),Aa=new Float32Array(4);function oi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ea[i];if(r===void 0&&(r=new Float32Array(i),Ea[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function rt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function at(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ss(s,e){let t=ba[e];t===void 0&&(t=new Int32Array(e),ba[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function td(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function nd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;s.uniform2fv(this.addr,e),at(t,e)}}function id(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;s.uniform3fv(this.addr,e),at(t,e)}}function sd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;s.uniform4fv(this.addr,e),at(t,e)}}function rd(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(rt(t,n))return;Aa.set(n),s.uniformMatrix2fv(this.addr,!1,Aa),at(t,n)}}function ad(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(rt(t,n))return;wa.set(n),s.uniformMatrix3fv(this.addr,!1,wa),at(t,n)}}function od(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(rt(t,n))return;Ta.set(n),s.uniformMatrix4fv(this.addr,!1,Ta),at(t,n)}}function ld(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function cd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;s.uniform2iv(this.addr,e),at(t,e)}}function hd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;s.uniform3iv(this.addr,e),at(t,e)}}function ud(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;s.uniform4iv(this.addr,e),at(t,e)}}function dd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function fd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;s.uniform2uiv(this.addr,e),at(t,e)}}function pd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;s.uniform3uiv(this.addr,e),at(t,e)}}function md(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;s.uniform4uiv(this.addr,e),at(t,e)}}function gd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?vo:_o;t.setTexture2D(e||r,i)}function Bd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mo,i)}function _d(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||So,i)}function vd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xo,i)}function xd(s){switch(s){case 5126:return td;case 35664:return nd;case 35665:return id;case 35666:return sd;case 35674:return rd;case 35675:return ad;case 35676:return od;case 5124:case 35670:return ld;case 35667:case 35671:return cd;case 35668:case 35672:return hd;case 35669:case 35673:return ud;case 5125:return dd;case 36294:return fd;case 36295:return pd;case 36296:return md;case 35678:case 36198:case 36298:case 36306:case 35682:return gd;case 35679:case 36299:case 36307:return Bd;case 35680:case 36300:case 36308:case 36293:return _d;case 36289:case 36303:case 36311:case 36292:return vd}}function Md(s,e){s.uniform1fv(this.addr,e)}function Sd(s,e){const t=oi(e,this.size,2);s.uniform2fv(this.addr,t)}function yd(s,e){const t=oi(e,this.size,3);s.uniform3fv(this.addr,t)}function Ed(s,e){const t=oi(e,this.size,4);s.uniform4fv(this.addr,t)}function bd(s,e){const t=oi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Td(s,e){const t=oi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function wd(s,e){const t=oi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ad(s,e){s.uniform1iv(this.addr,e)}function Rd(s,e){s.uniform2iv(this.addr,e)}function Cd(s,e){s.uniform3iv(this.addr,e)}function Ld(s,e){s.uniform4iv(this.addr,e)}function Pd(s,e){s.uniform1uiv(this.addr,e)}function Dd(s,e){s.uniform2uiv(this.addr,e)}function Id(s,e){s.uniform3uiv(this.addr,e)}function Ud(s,e){s.uniform4uiv(this.addr,e)}function Fd(s,e,t){const n=this.cache,i=e.length,r=ss(t,i);rt(n,r)||(s.uniform1iv(this.addr,r),at(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||_o,r[o])}function Nd(s,e,t){const n=this.cache,i=e.length,r=ss(t,i);rt(n,r)||(s.uniform1iv(this.addr,r),at(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Mo,r[o])}function Od(s,e,t){const n=this.cache,i=e.length,r=ss(t,i);rt(n,r)||(s.uniform1iv(this.addr,r),at(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||So,r[o])}function kd(s,e,t){const n=this.cache,i=e.length,r=ss(t,i);rt(n,r)||(s.uniform1iv(this.addr,r),at(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||xo,r[o])}function Hd(s){switch(s){case 5126:return Md;case 35664:return Sd;case 35665:return yd;case 35666:return Ed;case 35674:return bd;case 35675:return Td;case 35676:return wd;case 5124:case 35670:return Ad;case 35667:case 35671:return Rd;case 35668:case 35672:return Cd;case 35669:case 35673:return Ld;case 5125:return Pd;case 36294:return Dd;case 36295:return Id;case 36296:return Ud;case 35678:case 36198:case 36298:case 36306:case 35682:return Fd;case 35679:case 36299:case 36307:return Nd;case 35680:case 36300:case 36308:case 36293:return Od;case 36289:case 36303:case 36311:case 36292:return kd}}class zd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xd(t.type)}}class Gd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hd(t.type)}}class Vd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Os=/(\w+)(\])?(\[|\.)?/g;function Ra(s,e){s.seq.push(e),s.map[e.id]=e}function Wd(s,e,t){const n=s.name,i=n.length;for(Os.lastIndex=0;;){const r=Os.exec(n),o=Os.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ra(t,c===void 0?new zd(a,s,e):new Gd(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Vd(a),Ra(t,u)),t=u}}}class Yi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Wd(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ca(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Xd=37297;let qd=0;function Yd(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function $d(s){const e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(s);let n;switch(e===t?n="":e===Zi&&t===ji?n="LinearDisplayP3ToLinearSRGB":e===ji&&t===Zi&&(n="LinearSRGBToLinearDisplayP3"),s){case en:case ts:return[n,"LinearTransferOETF"];case nt:case ir:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function La(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Yd(s.getShaderSource(e),o)}else return i}function Kd(s,e){const t=$d(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jd(s,e){let t;switch(e){case ol:t="Linear";break;case ll:t="Reinhard";break;case cl:t="OptimizedCineon";break;case hl:t="ACESFilmic";break;case dl:t="AgX";break;case ul:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zd(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(jn).join(`
`)}function Jd(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(jn).join(`
`)}function Qd(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ef(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function jn(s){return s!==""}function Pa(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Da(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zs(s){return s.replace(tf,sf)}const nf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sf(s,e){let t=Le[e];if(t===void 0){const n=nf.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zs(t)}const rf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ia(s){return s.replace(rf,af)}function af(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ua(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function of(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===tr?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Uo?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jt&&(e="SHADOWMAP_TYPE_VSM"),e}function lf(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qn:case ei:e="ENVMAP_TYPE_CUBE";break;case es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cf(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ei:e="ENVMAP_MODE_REFRACTION";break}return e}function hf(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ya:e="ENVMAP_BLENDING_MULTIPLY";break;case rl:e="ENVMAP_BLENDING_MIX";break;case al:e="ENVMAP_BLENDING_ADD";break}return e}function uf(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function df(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=of(t),c=lf(t),h=cf(t),u=hf(t),p=uf(t),m=t.isWebGL2?"":Zd(t),B=Jd(t),g=Qd(r),f=i.createProgram();let d,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jn).join(`
`),d.length>0&&(d+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jn).join(`
`),y.length>0&&(y+=`
`)):(d=[Ua(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jn).join(`
`),y=[m,Ua(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?Le.tonemapping_pars_fragment:"",t.toneMapping!==hn?jd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,Kd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jn).join(`
`)),o=Zs(o),o=Pa(o,t),o=Da(o,t),a=Zs(a),a=Pa(a,t),a=Da(a,t),o=Ia(o),a=Ia(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[B,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=v+d+o,R=v+y+a,w=Ca(i,i.VERTEX_SHADER,b),T=Ca(i,i.FRAGMENT_SHADER,R);i.attachShader(f,w),i.attachShader(f,T),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function V(G){if(s.debug.checkShaderErrors){const ee=i.getProgramInfoLog(f).trim(),C=i.getShaderInfoLog(w).trim(),O=i.getShaderInfoLog(T).trim();let z=!0,q=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,w,T);else{const W=La(i,w,"vertex"),X=La(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+W+`
`+X)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(C===""||O==="")&&(q=!1);q&&(G.diagnostics={runnable:z,programLog:ee,vertexShader:{log:C,prefix:d},fragmentShader:{log:O,prefix:y}})}i.deleteShader(w),i.deleteShader(T),M=new Yi(i,f),E=ef(i,f)}let M;this.getUniforms=function(){return M===void 0&&V(this),M};let E;this.getAttributes=function(){return E===void 0&&V(this),E};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(f,Xd)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qd++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=T,this}let ff=0;class pf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mf(e),t.set(e,n)),n}}class mf{constructor(e){this.id=ff++,this.code=e,this.usedTimes=0}}function gf(s,e,t,n,i,r,o){const a=new rr,l=new pf,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,p=i.vertexTextures;let m=i.precision;const B={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function f(M,E,H,G,ee){const C=G.fog,O=ee.geometry,z=M.isMeshStandardMaterial?G.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),W=q&&q.mapping===es?q.image.height:null,X=B[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Y=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Q=Y!==void 0?Y.length:0;let te=0;O.morphAttributes.position!==void 0&&(te=1),O.morphAttributes.normal!==void 0&&(te=2),O.morphAttributes.color!==void 0&&(te=3);let k,$,oe,me;if(X){const vt=Vt[X];k=vt.vertexShader,$=vt.fragmentShader}else k=M.vertexShader,$=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const pe=s.getRenderTarget(),we=ee.isInstancedMesh===!0,Re=ee.isBatchedMesh===!0,Me=!!M.map,He=!!M.matcap,D=!!q,_t=!!M.aoMap,Be=!!M.lightMap,be=!!M.bumpMap,ue=!!M.normalMap,je=!!M.displacementMap,Pe=!!M.emissiveMap,S=!!M.metalnessMap,_=!!M.roughnessMap,U=M.anisotropy>0,Z=M.clearcoat>0,j=M.iridescence>0,J=M.sheen>0,de=M.transmission>0,ae=U&&!!M.anisotropyMap,ce=Z&&!!M.clearcoatMap,xe=Z&&!!M.clearcoatNormalMap,De=Z&&!!M.clearcoatRoughnessMap,K=j&&!!M.iridescenceMap,Ve=j&&!!M.iridescenceThicknessMap,Oe=J&&!!M.sheenColorMap,Ee=J&&!!M.sheenRoughnessMap,ge=!!M.specularMap,he=!!M.specularColorMap,Ce=!!M.specularIntensityMap,Ge=de&&!!M.transmissionMap,Je=de&&!!M.thicknessMap,Ue=!!M.gradientMap,ne=!!M.alphaMap,A=M.alphaTest>0,se=!!M.alphaHash,re=!!M.extensions,Se=!!O.attributes.uv1,_e=!!O.attributes.uv2,Xe=!!O.attributes.uv3;let qe=hn;return M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(qe=s.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:k,fragmentShader:$,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Re,instancing:we,instancingColor:we&&ee.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:en,map:Me,matcap:He,envMap:D,envMapMode:D&&q.mapping,envMapCubeUVHeight:W,aoMap:_t,lightMap:Be,bumpMap:be,normalMap:ue,displacementMap:p&&je,emissiveMap:Pe,normalMapObjectSpace:ue&&M.normalMapType===El,normalMapTangentSpace:ue&&M.normalMapType===io,metalnessMap:S,roughnessMap:_,anisotropy:U,anisotropyMap:ae,clearcoat:Z,clearcoatMap:ce,clearcoatNormalMap:xe,clearcoatRoughnessMap:De,iridescence:j,iridescenceMap:K,iridescenceThicknessMap:Ve,sheen:J,sheenColorMap:Oe,sheenRoughnessMap:Ee,specularMap:ge,specularColorMap:he,specularIntensityMap:Ce,transmission:de,transmissionMap:Ge,thicknessMap:Je,gradientMap:Ue,opaque:M.transparent===!1&&M.blending===Zn,alphaMap:ne,alphaTest:A,alphaHash:se,combine:M.combine,mapUv:Me&&g(M.map.channel),aoMapUv:_t&&g(M.aoMap.channel),lightMapUv:Be&&g(M.lightMap.channel),bumpMapUv:be&&g(M.bumpMap.channel),normalMapUv:ue&&g(M.normalMap.channel),displacementMapUv:je&&g(M.displacementMap.channel),emissiveMapUv:Pe&&g(M.emissiveMap.channel),metalnessMapUv:S&&g(M.metalnessMap.channel),roughnessMapUv:_&&g(M.roughnessMap.channel),anisotropyMapUv:ae&&g(M.anisotropyMap.channel),clearcoatMapUv:ce&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(M.sheenRoughnessMap.channel),specularMapUv:ge&&g(M.specularMap.channel),specularColorMapUv:he&&g(M.specularColorMap.channel),specularIntensityMapUv:Ce&&g(M.specularIntensityMap.channel),transmissionMapUv:Ge&&g(M.transmissionMap.channel),thicknessMapUv:Je&&g(M.thicknessMap.channel),alphaMapUv:ne&&g(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ue||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Se,vertexUv2s:_e,vertexUv3s:Xe,pointsUvs:ee.isPoints===!0&&!!O.attributes.uv&&(Me||ne),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ee.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:qe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Me&&M.map.isVideoTexture===!0&&We.getTransfer(M.map.colorSpace)===$e,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ht,flipSided:M.side===Tt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:re&&M.extensions.derivatives===!0,extensionFragDepth:re&&M.extensions.fragDepth===!0,extensionDrawBuffers:re&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const H in M.defines)E.push(H),E.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(y(E,M),v(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){const E=B[M.type];let H;if(E){const G=Vt[E];H=Zl.clone(G.uniforms)}else H=M.uniforms;return H}function R(M,E){let H;for(let G=0,ee=c.length;G<ee;G++){const C=c[G];if(C.cacheKey===E){H=C,++H.usedTimes;break}}return H===void 0&&(H=new df(s,E,M,r),c.push(H)),H}function w(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function V(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:b,acquireProgram:R,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:V}}function Bf(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function _f(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Fa(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Na(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,p,m,B,g,f){let d=s[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:B,renderOrder:u.renderOrder,z:g,group:f},s[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=B,d.renderOrder=u.renderOrder,d.z=g,d.group=f),e++,d}function a(u,p,m,B,g,f){const d=o(u,p,m,B,g,f);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):t.push(d)}function l(u,p,m,B,g,f){const d=o(u,p,m,B,g,f);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):t.unshift(d)}function c(u,p){t.length>1&&t.sort(u||_f),n.length>1&&n.sort(p||Fa),i.length>1&&i.sort(p||Fa)}function h(){for(let u=e,p=s.length;u<p;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function vf(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Na,s.set(n,[o])):i>=r.length?(o=new Na,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function xf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ze};break;case"SpotLight":t={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Mf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Sf=0;function yf(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ef(s,e){const t=new xf,n=Mf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);const r=new P,o=new it,a=new it;function l(h,u){let p=0,m=0,B=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let g=0,f=0,d=0,y=0,v=0,b=0,R=0,w=0,T=0,V=0,M=0;h.sort(yf);const E=u===!0?Math.PI:1;for(let G=0,ee=h.length;G<ee;G++){const C=h[G],O=C.color,z=C.intensity,q=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)p+=O.r*z*E,m+=O.g*z*E,B+=O.b*z*E;else if(C.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(C.sh.coefficients[X],z);M++}else if(C.isDirectionalLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*E),C.castShadow){const Y=C.shadow,Q=n.get(C);Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=W,i.directionalShadowMatrix[g]=C.shadow.matrix,b++}i.directional[g]=X,g++}else if(C.isSpotLight){const X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(O).multiplyScalar(z*E),X.distance=q,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,i.spot[d]=X;const Y=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,Y.updateMatrices(C),C.castShadow&&V++),i.spotLightMatrix[d]=Y.matrix,C.castShadow){const Q=n.get(C);Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,i.spotShadow[d]=Q,i.spotShadowMap[d]=W,w++}d++}else if(C.isRectAreaLight){const X=t.get(C);X.color.copy(O).multiplyScalar(z),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),i.rectArea[y]=X,y++}else if(C.isPointLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*E),X.distance=C.distance,X.decay=C.decay,C.castShadow){const Y=C.shadow,Q=n.get(C);Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,Q.shadowCameraNear=Y.camera.near,Q.shadowCameraFar=Y.camera.far,i.pointShadow[f]=Q,i.pointShadowMap[f]=W,i.pointShadowMatrix[f]=C.shadow.matrix,R++}i.point[f]=X,f++}else if(C.isHemisphereLight){const X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(z*E),X.groundColor.copy(C.groundColor).multiplyScalar(z*E),i.hemi[v]=X,v++}}y>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=B;const H=i.hash;(H.directionalLength!==g||H.pointLength!==f||H.spotLength!==d||H.rectAreaLength!==y||H.hemiLength!==v||H.numDirectionalShadows!==b||H.numPointShadows!==R||H.numSpotShadows!==w||H.numSpotMaps!==T||H.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=d,i.rectArea.length=y,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=w+T-V,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=V,i.numLightProbes=M,H.directionalLength=g,H.pointLength=f,H.spotLength=d,H.rectAreaLength=y,H.hemiLength=v,H.numDirectionalShadows=b,H.numPointShadows=R,H.numSpotShadows=w,H.numSpotMaps=T,H.numLightProbes=M,i.version=Sf++)}function c(h,u){let p=0,m=0,B=0,g=0,f=0;const d=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const b=h[y];if(b.isDirectionalLight){const R=i.directional[p];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),p++}else if(b.isSpotLight){const R=i.spot[B];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),B++}else if(b.isRectAreaLight){const R=i.rectArea[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(d),a.identity(),o.copy(b.matrixWorld),o.premultiply(d),a.extractRotation(o),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const R=i.point[m];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(d),m++}else if(b.isHemisphereLight){const R=i.hemi[f];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(d),f++}}}return{setup:l,setupView:c,state:i}}function Oa(s,e){const t=new Ef(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function bf(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Oa(s,e),t.set(r,[l])):o>=a.length?(l=new Oa(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Tf extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wf extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Af=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rf=`uniform sampler2D shadow_pass;
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
}`;function Cf(s,e,t){let n=new ar;const i=new ke,r=new ke,o=new ut,a=new Tf({depthPacking:yl}),l=new wf,c={},h=t.maxTextureSize,u={[dn]:Tt,[Tt]:dn,[ht]:ht},p=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Af,fragmentShader:Rf}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const B=new Lt;B.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ke(B,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let d=this.type;this.render=function(w,T,V){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),E=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),G=s.state;G.setBlending(cn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const ee=d!==Jt&&this.type===Jt,C=d===Jt&&this.type!==Jt;for(let O=0,z=w.length;O<z;O++){const q=w[O],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const X=W.getFrameExtents();if(i.multiply(X),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,W.mapSize.y=r.y)),W.map===null||ee===!0||C===!0){const Q=this.type!==Jt?{minFilter:dt,magFilter:dt}:{};W.map!==null&&W.map.dispose(),W.map=new Cn(i.x,i.y,Q),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const Y=W.getViewportCount();for(let Q=0;Q<Y;Q++){const te=W.getViewport(Q);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),G.viewport(o),W.updateMatrices(q,Q),n=W.getFrustum(),b(T,V,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Jt&&y(W,V),W.needsUpdate=!1}d=this.type,f.needsUpdate=!1,s.setRenderTarget(M,E,H)};function y(w,T){const V=e.update(g);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Cn(i.x,i.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,V,p,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,V,m,g,null)}function v(w,T,V,M){let E=null;const H=V.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(H!==void 0)E=H;else if(E=V.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const G=E.uuid,ee=T.uuid;let C=c[G];C===void 0&&(C={},c[G]=C);let O=C[ee];O===void 0&&(O=E.clone(),C[ee]=O,T.addEventListener("dispose",R)),E=O}if(E.visible=T.visible,E.wireframe=T.wireframe,M===Jt?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:u[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,V.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=s.properties.get(E);G.light=V}return E}function b(w,T,V,M,E){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Jt)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld);const ee=e.update(w),C=w.material;if(Array.isArray(C)){const O=ee.groups;for(let z=0,q=O.length;z<q;z++){const W=O[z],X=C[W.materialIndex];if(X&&X.visible){const Y=v(w,X,M,E);w.onBeforeShadow(s,w,T,V,ee,Y,W),s.renderBufferDirect(V,null,ee,Y,w,W),w.onAfterShadow(s,w,T,V,ee,Y,W)}}}else if(C.visible){const O=v(w,C,M,E);w.onBeforeShadow(s,w,T,V,ee,O,null),s.renderBufferDirect(V,null,ee,O,w,null),w.onAfterShadow(s,w,T,V,ee,O,null)}}const G=w.children;for(let ee=0,C=G.length;ee<C;ee++)b(G[ee],T,V,M,E)}function R(w){w.target.removeEventListener("dispose",R);for(const V in c){const M=c[V],E=w.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function Lf(s,e,t){const n=t.isWebGL2;function i(){let A=!1;const se=new ut;let re=null;const Se=new ut(0,0,0,0);return{setMask:function(_e){re!==_e&&!A&&(s.colorMask(_e,_e,_e,_e),re=_e)},setLocked:function(_e){A=_e},setClear:function(_e,Xe,qe,ot,vt){vt===!0&&(_e*=ot,Xe*=ot,qe*=ot),se.set(_e,Xe,qe,ot),Se.equals(se)===!1&&(s.clearColor(_e,Xe,qe,ot),Se.copy(se))},reset:function(){A=!1,re=null,Se.set(-1,0,0,0)}}}function r(){let A=!1,se=null,re=null,Se=null;return{setTest:function(_e){_e?Re(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(_e){se!==_e&&!A&&(s.depthMask(_e),se=_e)},setFunc:function(_e){if(re!==_e){switch(_e){case Jo:s.depthFunc(s.NEVER);break;case Qo:s.depthFunc(s.ALWAYS);break;case el:s.depthFunc(s.LESS);break;case $i:s.depthFunc(s.LEQUAL);break;case tl:s.depthFunc(s.EQUAL);break;case nl:s.depthFunc(s.GEQUAL);break;case il:s.depthFunc(s.GREATER);break;case sl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}re=_e}},setLocked:function(_e){A=_e},setClear:function(_e){Se!==_e&&(s.clearDepth(_e),Se=_e)},reset:function(){A=!1,se=null,re=null,Se=null}}}function o(){let A=!1,se=null,re=null,Se=null,_e=null,Xe=null,qe=null,ot=null,vt=null;return{setTest:function(Ye){A||(Ye?Re(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(Ye){se!==Ye&&!A&&(s.stencilMask(Ye),se=Ye)},setFunc:function(Ye,xt,Gt){(re!==Ye||Se!==xt||_e!==Gt)&&(s.stencilFunc(Ye,xt,Gt),re=Ye,Se=xt,_e=Gt)},setOp:function(Ye,xt,Gt){(Xe!==Ye||qe!==xt||ot!==Gt)&&(s.stencilOp(Ye,xt,Gt),Xe=Ye,qe=xt,ot=Gt)},setLocked:function(Ye){A=Ye},setClear:function(Ye){vt!==Ye&&(s.clearStencil(Ye),vt=Ye)},reset:function(){A=!1,se=null,re=null,Se=null,_e=null,Xe=null,qe=null,ot=null,vt=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let p={},m={},B=new WeakMap,g=[],f=null,d=!1,y=null,v=null,b=null,R=null,w=null,T=null,V=null,M=new ze(0,0,0),E=0,H=!1,G=null,ee=null,C=null,O=null,z=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=X>=2);let Q=null,te={};const k=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),oe=new ut().fromArray(k),me=new ut().fromArray($);function pe(A,se,re,Se){const _e=new Uint8Array(4),Xe=s.createTexture();s.bindTexture(A,Xe),s.texParameteri(A,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(A,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<re;qe++)n&&(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)?s.texImage3D(se,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(se+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return Xe}const we={};we[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(we[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(s.DEPTH_TEST),l.setFunc($i),Pe(!1),S(vr),Re(s.CULL_FACE),ue(cn);function Re(A){p[A]!==!0&&(s.enable(A),p[A]=!0)}function Me(A){p[A]!==!1&&(s.disable(A),p[A]=!1)}function He(A,se){return m[A]!==se?(s.bindFramebuffer(A,se),m[A]=se,n&&(A===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=se),A===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=se)),!0):!1}function D(A,se){let re=g,Se=!1;if(A)if(re=B.get(se),re===void 0&&(re=[],B.set(se,re)),A.isWebGLMultipleRenderTargets){const _e=A.texture;if(re.length!==_e.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Xe=0,qe=_e.length;Xe<qe;Xe++)re[Xe]=s.COLOR_ATTACHMENT0+Xe;re.length=_e.length,Se=!0}}else re[0]!==s.COLOR_ATTACHMENT0&&(re[0]=s.COLOR_ATTACHMENT0,Se=!0);else re[0]!==s.BACK&&(re[0]=s.BACK,Se=!0);Se&&(t.isWebGL2?s.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function _t(A){return f!==A?(s.useProgram(A),f=A,!0):!1}const Be={[En]:s.FUNC_ADD,[No]:s.FUNC_SUBTRACT,[Oo]:s.FUNC_REVERSE_SUBTRACT};if(n)Be[yr]=s.MIN,Be[Er]=s.MAX;else{const A=e.get("EXT_blend_minmax");A!==null&&(Be[yr]=A.MIN_EXT,Be[Er]=A.MAX_EXT)}const be={[ko]:s.ZERO,[Ho]:s.ONE,[zo]:s.SRC_COLOR,[Gs]:s.SRC_ALPHA,[Yo]:s.SRC_ALPHA_SATURATE,[Xo]:s.DST_COLOR,[Vo]:s.DST_ALPHA,[Go]:s.ONE_MINUS_SRC_COLOR,[Vs]:s.ONE_MINUS_SRC_ALPHA,[qo]:s.ONE_MINUS_DST_COLOR,[Wo]:s.ONE_MINUS_DST_ALPHA,[$o]:s.CONSTANT_COLOR,[Ko]:s.ONE_MINUS_CONSTANT_COLOR,[jo]:s.CONSTANT_ALPHA,[Zo]:s.ONE_MINUS_CONSTANT_ALPHA};function ue(A,se,re,Se,_e,Xe,qe,ot,vt,Ye){if(A===cn){d===!0&&(Me(s.BLEND),d=!1);return}if(d===!1&&(Re(s.BLEND),d=!0),A!==Fo){if(A!==y||Ye!==H){if((v!==En||w!==En)&&(s.blendEquation(s.FUNC_ADD),v=En,w=En),Ye)switch(A){case Zn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xr:s.blendFunc(s.ONE,s.ONE);break;case Mr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Zn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Mr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}b=null,R=null,T=null,V=null,M.set(0,0,0),E=0,y=A,H=Ye}return}_e=_e||se,Xe=Xe||re,qe=qe||Se,(se!==v||_e!==w)&&(s.blendEquationSeparate(Be[se],Be[_e]),v=se,w=_e),(re!==b||Se!==R||Xe!==T||qe!==V)&&(s.blendFuncSeparate(be[re],be[Se],be[Xe],be[qe]),b=re,R=Se,T=Xe,V=qe),(ot.equals(M)===!1||vt!==E)&&(s.blendColor(ot.r,ot.g,ot.b,vt),M.copy(ot),E=vt),y=A,H=!1}function je(A,se){A.side===ht?Me(s.CULL_FACE):Re(s.CULL_FACE);let re=A.side===Tt;se&&(re=!re),Pe(re),A.blending===Zn&&A.transparent===!1?ue(cn):ue(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),a.setMask(A.colorWrite);const Se=A.stencilWrite;c.setTest(Se),Se&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),U(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(A){G!==A&&(A?s.frontFace(s.CW):s.frontFace(s.CCW),G=A)}function S(A){A!==Do?(Re(s.CULL_FACE),A!==ee&&(A===vr?s.cullFace(s.BACK):A===Io?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),ee=A}function _(A){A!==C&&(W&&s.lineWidth(A),C=A)}function U(A,se,re){A?(Re(s.POLYGON_OFFSET_FILL),(O!==se||z!==re)&&(s.polygonOffset(se,re),O=se,z=re)):Me(s.POLYGON_OFFSET_FILL)}function Z(A){A?Re(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function j(A){A===void 0&&(A=s.TEXTURE0+q-1),Q!==A&&(s.activeTexture(A),Q=A)}function J(A,se,re){re===void 0&&(Q===null?re=s.TEXTURE0+q-1:re=Q);let Se=te[re];Se===void 0&&(Se={type:void 0,texture:void 0},te[re]=Se),(Se.type!==A||Se.texture!==se)&&(Q!==re&&(s.activeTexture(re),Q=re),s.bindTexture(A,se||we[A]),Se.type=A,Se.texture=se)}function de(){const A=te[Q];A!==void 0&&A.type!==void 0&&(s.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function ae(){try{s.compressedTexImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ce(){try{s.compressedTexImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xe(){try{s.texSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function De(){try{s.texSubImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Oe(){try{s.texStorage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ge(){try{s.texImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(){try{s.texImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ce(A){oe.equals(A)===!1&&(s.scissor(A.x,A.y,A.z,A.w),oe.copy(A))}function Ge(A){me.equals(A)===!1&&(s.viewport(A.x,A.y,A.z,A.w),me.copy(A))}function Je(A,se){let re=u.get(se);re===void 0&&(re=new WeakMap,u.set(se,re));let Se=re.get(A);Se===void 0&&(Se=s.getUniformBlockIndex(se,A.name),re.set(A,Se))}function Ue(A,se){const Se=u.get(se).get(A);h.get(se)!==Se&&(s.uniformBlockBinding(se,Se,A.__bindingPointIndex),h.set(se,Se))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},Q=null,te={},m={},B=new WeakMap,g=[],f=null,d=!1,y=null,v=null,b=null,R=null,w=null,T=null,V=null,M=new ze(0,0,0),E=0,H=!1,G=null,ee=null,C=null,O=null,z=null,oe.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:Me,bindFramebuffer:He,drawBuffers:D,useProgram:_t,setBlending:ue,setMaterial:je,setFlipSided:Pe,setCullFace:S,setLineWidth:_,setPolygonOffset:U,setScissorTest:Z,activeTexture:j,bindTexture:J,unbindTexture:de,compressedTexImage2D:ae,compressedTexImage3D:ce,texImage2D:ge,texImage3D:he,updateUBOMapping:Je,uniformBlockBinding:Ue,texStorage2D:Oe,texStorage3D:Ee,texSubImage2D:xe,texSubImage3D:De,compressedTexSubImage2D:K,compressedTexSubImage3D:Ve,scissor:Ce,viewport:Ge,reset:ne}}function Pf(s,e,t,n,i,r,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function B(S,_){return m?new OffscreenCanvas(S,_):Bi("canvas")}function g(S,_,U,Z){let j=1;if((S.width>Z||S.height>Z)&&(j=Z/Math.max(S.width,S.height)),j<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const J=_?js:Math.floor,de=J(j*S.width),ae=J(j*S.height);u===void 0&&(u=B(de,ae));const ce=U?B(de,ae):u;return ce.width=de,ce.height=ae,ce.getContext("2d").drawImage(S,0,0,de,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+de+"x"+ae+")."),ce}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function f(S){return ea(S.width)&&ea(S.height)}function d(S){return a?!1:S.wrapS!==Ht||S.wrapT!==Ht||S.minFilter!==dt&&S.minFilter!==Et}function y(S,_){return S.generateMipmaps&&_&&S.minFilter!==dt&&S.minFilter!==Et}function v(S){s.generateMipmap(S)}function b(S,_,U,Z,j=!1){if(a===!1)return _;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let J=_;if(_===s.RED&&(U===s.FLOAT&&(J=s.R32F),U===s.HALF_FLOAT&&(J=s.R16F),U===s.UNSIGNED_BYTE&&(J=s.R8)),_===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(J=s.R8UI),U===s.UNSIGNED_SHORT&&(J=s.R16UI),U===s.UNSIGNED_INT&&(J=s.R32UI),U===s.BYTE&&(J=s.R8I),U===s.SHORT&&(J=s.R16I),U===s.INT&&(J=s.R32I)),_===s.RG&&(U===s.FLOAT&&(J=s.RG32F),U===s.HALF_FLOAT&&(J=s.RG16F),U===s.UNSIGNED_BYTE&&(J=s.RG8)),_===s.RGBA){const de=j?Ki:We.getTransfer(Z);U===s.FLOAT&&(J=s.RGBA32F),U===s.HALF_FLOAT&&(J=s.RGBA16F),U===s.UNSIGNED_BYTE&&(J=de===$e?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function R(S,_,U){return y(S,U)===!0||S.isFramebufferTexture&&S.minFilter!==dt&&S.minFilter!==Et?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function w(S){return S===dt||S===br||S===cs?s.NEAREST:s.LINEAR}function T(S){const _=S.target;_.removeEventListener("dispose",T),M(_),_.isVideoTexture&&h.delete(_)}function V(S){const _=S.target;_.removeEventListener("dispose",V),H(_)}function M(S){const _=n.get(S);if(_.__webglInit===void 0)return;const U=S.source,Z=p.get(U);if(Z){const j=Z[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(S),Object.keys(Z).length===0&&p.delete(U)}n.remove(S)}function E(S){const _=n.get(S);s.deleteTexture(_.__webglTexture);const U=S.source,Z=p.get(U);delete Z[_.__cacheKey],o.memory.textures--}function H(S){const _=S.texture,U=n.get(S),Z=n.get(_);if(Z.__webglTexture!==void 0&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(U.__webglFramebuffer[j]))for(let J=0;J<U.__webglFramebuffer[j].length;J++)s.deleteFramebuffer(U.__webglFramebuffer[j][J]);else s.deleteFramebuffer(U.__webglFramebuffer[j]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[j])}else{if(Array.isArray(U.__webglFramebuffer))for(let j=0;j<U.__webglFramebuffer.length;j++)s.deleteFramebuffer(U.__webglFramebuffer[j]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let j=0;j<U.__webglColorRenderbuffer.length;j++)U.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[j]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let j=0,J=_.length;j<J;j++){const de=n.get(_[j]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(_[j])}n.remove(_),n.remove(S)}let G=0;function ee(){G=0}function C(){const S=G;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),G+=1,S}function O(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function z(S,_){const U=n.get(S);if(S.isVideoTexture&&je(S),S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){const Z=S.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(U,S,_);return}}t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+_)}function q(S,_){const U=n.get(S);if(S.version>0&&U.__version!==S.version){oe(U,S,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+_)}function W(S,_){const U=n.get(S);if(S.version>0&&U.__version!==S.version){oe(U,S,_);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+_)}function X(S,_){const U=n.get(S);if(S.version>0&&U.__version!==S.version){me(U,S,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+_)}const Y={[qs]:s.REPEAT,[Ht]:s.CLAMP_TO_EDGE,[Ys]:s.MIRRORED_REPEAT},Q={[dt]:s.NEAREST,[br]:s.NEAREST_MIPMAP_NEAREST,[cs]:s.NEAREST_MIPMAP_LINEAR,[Et]:s.LINEAR,[fl]:s.LINEAR_MIPMAP_NEAREST,[mi]:s.LINEAR_MIPMAP_LINEAR},te={[bl]:s.NEVER,[Ll]:s.ALWAYS,[Tl]:s.LESS,[so]:s.LEQUAL,[wl]:s.EQUAL,[Cl]:s.GEQUAL,[Al]:s.GREATER,[Rl]:s.NOTEQUAL};function k(S,_,U){if(U?(s.texParameteri(S,s.TEXTURE_WRAP_S,Y[_.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,Y[_.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,Y[_.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,Q[_.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,Q[_.minFilter])):(s.texParameteri(S,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(S,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(_.wrapS!==Ht||_.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,s.TEXTURE_MAG_FILTER,w(_.magFilter)),s.texParameteri(S,s.TEXTURE_MIN_FILTER,w(_.minFilter)),_.minFilter!==dt&&_.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,te[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===dt||_.minFilter!==cs&&_.minFilter!==mi||_.type===ln&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===gi&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(s.texParameterf(S,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function $(S,_){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",T));const Z=_.source;let j=p.get(Z);j===void 0&&(j={},p.set(Z,j));const J=O(_);if(J!==S.__cacheKey){j[J]===void 0&&(j[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,U=!0),j[J].usedTimes++;const de=j[S.__cacheKey];de!==void 0&&(j[S.__cacheKey].usedTimes--,de.usedTimes===0&&E(_)),S.__cacheKey=J,S.__webglTexture=j[J].texture}return U}function oe(S,_,U){let Z=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=s.TEXTURE_3D);const j=$(S,_),J=_.source;t.bindTexture(Z,S.__webglTexture,s.TEXTURE0+U);const de=n.get(J);if(J.version!==de.__version||j===!0){t.activeTexture(s.TEXTURE0+U);const ae=We.getPrimaries(We.workingColorSpace),ce=_.colorSpace===It?null:We.getPrimaries(_.colorSpace),xe=_.colorSpace===It||ae===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const De=d(_)&&f(_.image)===!1;let K=g(_.image,De,!1,i.maxTextureSize);K=Pe(_,K);const Ve=f(K)||a,Oe=r.convert(_.format,_.colorSpace);let Ee=r.convert(_.type),ge=b(_.internalFormat,Oe,Ee,_.colorSpace,_.isVideoTexture);k(Z,_,Ve);let he;const Ce=_.mipmaps,Ge=a&&_.isVideoTexture!==!0&&ge!==to,Je=de.__version===void 0||j===!0,Ue=R(_,K,Ve);if(_.isDepthTexture)ge=s.DEPTH_COMPONENT,a?_.type===ln?ge=s.DEPTH_COMPONENT32F:_.type===on?ge=s.DEPTH_COMPONENT24:_.type===wn?ge=s.DEPTH24_STENCIL8:ge=s.DEPTH_COMPONENT16:_.type===ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===An&&ge===s.DEPTH_COMPONENT&&_.type!==nr&&_.type!==on&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=on,Ee=r.convert(_.type)),_.format===ti&&ge===s.DEPTH_COMPONENT&&(ge=s.DEPTH_STENCIL,_.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=wn,Ee=r.convert(_.type))),Je&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,ge,K.width,K.height):t.texImage2D(s.TEXTURE_2D,0,ge,K.width,K.height,0,Oe,Ee,null));else if(_.isDataTexture)if(Ce.length>0&&Ve){Ge&&Je&&t.texStorage2D(s.TEXTURE_2D,Ue,ge,Ce[0].width,Ce[0].height);for(let ne=0,A=Ce.length;ne<A;ne++)he=Ce[ne],Ge?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,he.width,he.height,Oe,Ee,he.data):t.texImage2D(s.TEXTURE_2D,ne,ge,he.width,he.height,0,Oe,Ee,he.data);_.generateMipmaps=!1}else Ge?(Je&&t.texStorage2D(s.TEXTURE_2D,Ue,ge,K.width,K.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,K.width,K.height,Oe,Ee,K.data)):t.texImage2D(s.TEXTURE_2D,0,ge,K.width,K.height,0,Oe,Ee,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,ge,Ce[0].width,Ce[0].height,K.depth);for(let ne=0,A=Ce.length;ne<A;ne++)he=Ce[ne],_.format!==zt?Oe!==null?Ge?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,K.depth,Oe,he.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,ge,he.width,he.height,K.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,K.depth,Oe,Ee,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,ge,he.width,he.height,K.depth,0,Oe,Ee,he.data)}else{Ge&&Je&&t.texStorage2D(s.TEXTURE_2D,Ue,ge,Ce[0].width,Ce[0].height);for(let ne=0,A=Ce.length;ne<A;ne++)he=Ce[ne],_.format!==zt?Oe!==null?Ge?t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,he.width,he.height,Oe,he.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,he.width,he.height,Oe,Ee,he.data):t.texImage2D(s.TEXTURE_2D,ne,ge,he.width,he.height,0,Oe,Ee,he.data)}else if(_.isDataArrayTexture)Ge?(Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,ge,K.width,K.height,K.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Oe,Ee,K.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ge,K.width,K.height,K.depth,0,Oe,Ee,K.data);else if(_.isData3DTexture)Ge?(Je&&t.texStorage3D(s.TEXTURE_3D,Ue,ge,K.width,K.height,K.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Oe,Ee,K.data)):t.texImage3D(s.TEXTURE_3D,0,ge,K.width,K.height,K.depth,0,Oe,Ee,K.data);else if(_.isFramebufferTexture){if(Je)if(Ge)t.texStorage2D(s.TEXTURE_2D,Ue,ge,K.width,K.height);else{let ne=K.width,A=K.height;for(let se=0;se<Ue;se++)t.texImage2D(s.TEXTURE_2D,se,ge,ne,A,0,Oe,Ee,null),ne>>=1,A>>=1}}else if(Ce.length>0&&Ve){Ge&&Je&&t.texStorage2D(s.TEXTURE_2D,Ue,ge,Ce[0].width,Ce[0].height);for(let ne=0,A=Ce.length;ne<A;ne++)he=Ce[ne],Ge?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,Oe,Ee,he):t.texImage2D(s.TEXTURE_2D,ne,ge,Oe,Ee,he);_.generateMipmaps=!1}else Ge?(Je&&t.texStorage2D(s.TEXTURE_2D,Ue,ge,K.width,K.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Ee,K)):t.texImage2D(s.TEXTURE_2D,0,ge,Oe,Ee,K);y(_,Ve)&&v(Z),de.__version=J.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function me(S,_,U){if(_.image.length!==6)return;const Z=$(S,_),j=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+U);const J=n.get(j);if(j.version!==J.__version||Z===!0){t.activeTexture(s.TEXTURE0+U);const de=We.getPrimaries(We.workingColorSpace),ae=_.colorSpace===It?null:We.getPrimaries(_.colorSpace),ce=_.colorSpace===It||de===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const xe=_.isCompressedTexture||_.image[0].isCompressedTexture,De=_.image[0]&&_.image[0].isDataTexture,K=[];for(let ne=0;ne<6;ne++)!xe&&!De?K[ne]=g(_.image[ne],!1,!0,i.maxCubemapSize):K[ne]=De?_.image[ne].image:_.image[ne],K[ne]=Pe(_,K[ne]);const Ve=K[0],Oe=f(Ve)||a,Ee=r.convert(_.format,_.colorSpace),ge=r.convert(_.type),he=b(_.internalFormat,Ee,ge,_.colorSpace),Ce=a&&_.isVideoTexture!==!0,Ge=J.__version===void 0||Z===!0;let Je=R(_,Ve,Oe);k(s.TEXTURE_CUBE_MAP,_,Oe);let Ue;if(xe){Ce&&Ge&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Je,he,Ve.width,Ve.height);for(let ne=0;ne<6;ne++){Ue=K[ne].mipmaps;for(let A=0;A<Ue.length;A++){const se=Ue[A];_.format!==zt?Ee!==null?Ce?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,A,0,0,se.width,se.height,Ee,se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,A,he,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,A,0,0,se.width,se.height,Ee,ge,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,A,he,se.width,se.height,0,Ee,ge,se.data)}}}else{Ue=_.mipmaps,Ce&&Ge&&(Ue.length>0&&Je++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Je,he,K[0].width,K[0].height));for(let ne=0;ne<6;ne++)if(De){Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,K[ne].width,K[ne].height,Ee,ge,K[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,he,K[ne].width,K[ne].height,0,Ee,ge,K[ne].data);for(let A=0;A<Ue.length;A++){const re=Ue[A].image[ne].image;Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,A+1,0,0,re.width,re.height,Ee,ge,re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,A+1,he,re.width,re.height,0,Ee,ge,re.data)}}else{Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ee,ge,K[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,he,Ee,ge,K[ne]);for(let A=0;A<Ue.length;A++){const se=Ue[A];Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,A+1,0,0,Ee,ge,se.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,A+1,he,Ee,ge,se.image[ne])}}}y(_,Oe)&&v(s.TEXTURE_CUBE_MAP),J.__version=j.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function pe(S,_,U,Z,j,J){const de=r.convert(U.format,U.colorSpace),ae=r.convert(U.type),ce=b(U.internalFormat,de,ae,U.colorSpace);if(!n.get(_).__hasExternalTextures){const De=Math.max(1,_.width>>J),K=Math.max(1,_.height>>J);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,J,ce,De,K,_.depth,0,de,ae,null):t.texImage2D(j,J,ce,De,K,0,de,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,S),ue(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,j,n.get(U).__webglTexture,0,be(_)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,j,n.get(U).__webglTexture,J),t.bindFramebuffer(s.FRAMEBUFFER,null)}function we(S,_,U){if(s.bindRenderbuffer(s.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let Z=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(U||ue(_)){const j=_.depthTexture;j&&j.isDepthTexture&&(j.type===ln?Z=s.DEPTH_COMPONENT32F:j.type===on&&(Z=s.DEPTH_COMPONENT24));const J=be(_);ue(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,Z,_.width,_.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,J,Z,_.width,_.height)}else s.renderbufferStorage(s.RENDERBUFFER,Z,_.width,_.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){const Z=be(_);U&&ue(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,_.width,_.height):ue(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,S)}else{const Z=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let j=0;j<Z.length;j++){const J=Z[j],de=r.convert(J.format,J.colorSpace),ae=r.convert(J.type),ce=b(J.internalFormat,de,ae,J.colorSpace),xe=be(_);U&&ue(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,ce,_.width,_.height):ue(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,ce,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ce,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),z(_.depthTexture,0);const Z=n.get(_.depthTexture).__webglTexture,j=be(_);if(_.depthTexture.format===An)ue(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(_.depthTexture.format===ti)ue(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Me(S){const _=n.get(S),U=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Re(_.__webglFramebuffer,S)}else if(U){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]=s.createRenderbuffer(),we(_.__webglDepthbuffer[Z],S,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=s.createRenderbuffer(),we(_.__webglDepthbuffer,S,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(S,_,U){const Z=n.get(S);_!==void 0&&pe(Z.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Me(S)}function D(S){const _=S.texture,U=n.get(S),Z=n.get(_);S.addEventListener("dispose",V),S.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=_.version,o.memory.textures++);const j=S.isWebGLCubeRenderTarget===!0,J=S.isWebGLMultipleRenderTargets===!0,de=f(S)||a;if(j){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let ce=0;ce<_.mipmaps.length;ce++)U.__webglFramebuffer[ae][ce]=s.createFramebuffer()}else U.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)U.__webglFramebuffer[ae]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(J)if(i.drawBuffers){const ae=S.texture;for(let ce=0,xe=ae.length;ce<xe;ce++){const De=n.get(ae[ce]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&ue(S)===!1){const ae=J?_:[_];U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<ae.length;ce++){const xe=ae[ce];U.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);const De=r.convert(xe.format,xe.colorSpace),K=r.convert(xe.type),Ve=b(xe.internalFormat,De,K,xe.colorSpace,S.isXRRenderTarget===!0),Oe=be(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,Ve,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),we(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),k(s.TEXTURE_CUBE_MAP,_,de);for(let ae=0;ae<6;ae++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)pe(U.__webglFramebuffer[ae][ce],S,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce);else pe(U.__webglFramebuffer[ae],S,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);y(_,de)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){const ae=S.texture;for(let ce=0,xe=ae.length;ce<xe;ce++){const De=ae[ce],K=n.get(De);t.bindTexture(s.TEXTURE_2D,K.__webglTexture),k(s.TEXTURE_2D,De,de),pe(U.__webglFramebuffer,S,De,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,0),y(De,de)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ae=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,Z.__webglTexture),k(ae,_,de),a&&_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)pe(U.__webglFramebuffer[ce],S,_,s.COLOR_ATTACHMENT0,ae,ce);else pe(U.__webglFramebuffer,S,_,s.COLOR_ATTACHMENT0,ae,0);y(_,de)&&v(ae),t.unbindTexture()}S.depthBuffer&&Me(S)}function _t(S){const _=f(S)||a,U=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0,j=U.length;Z<j;Z++){const J=U[Z];if(y(J,_)){const de=S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ae=n.get(J).__webglTexture;t.bindTexture(de,ae),v(de),t.unbindTexture()}}}function Be(S){if(a&&S.samples>0&&ue(S)===!1){const _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],U=S.width,Z=S.height;let j=s.COLOR_BUFFER_BIT;const J=[],de=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=n.get(S),ce=S.isWebGLMultipleRenderTargets===!0;if(ce)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){J.push(s.COLOR_ATTACHMENT0+xe),S.depthBuffer&&J.push(de);const De=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(De===!1&&(S.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ce&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[xe]),De===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[de]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[de])),ce){const K=n.get(_[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,U,Z,0,0,U,Z,j,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ae.__webglColorRenderbuffer[xe]);const De=n.get(_[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,De,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function be(S){return Math.min(i.maxSamples,S.samples)}function ue(S){const _=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function je(S){const _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function Pe(S,_){const U=S.colorSpace,Z=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===$s||U!==en&&U!==It&&(We.getTransfer(U)===$e?a===!1?e.has("EXT_sRGB")===!0&&Z===zt?(S.format=$s,S.minFilter=Et,S.generateMipmaps=!1):_=ao.sRGBToLinear(_):(Z!==zt||j!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}this.allocateTextureUnit=C,this.resetTextureUnits=ee,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=He,this.setupRenderTarget=D,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ue}function Df(s,e,t){const n=t.isWebGL2;function i(r,o=It){let a;const l=We.getTransfer(o);if(r===un)return s.UNSIGNED_BYTE;if(r===ja)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Za)return s.UNSIGNED_SHORT_5_5_5_1;if(r===pl)return s.BYTE;if(r===ml)return s.SHORT;if(r===nr)return s.UNSIGNED_SHORT;if(r===Ka)return s.INT;if(r===on)return s.UNSIGNED_INT;if(r===ln)return s.FLOAT;if(r===gi)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===gl)return s.ALPHA;if(r===zt)return s.RGBA;if(r===Bl)return s.LUMINANCE;if(r===_l)return s.LUMINANCE_ALPHA;if(r===An)return s.DEPTH_COMPONENT;if(r===ti)return s.DEPTH_STENCIL;if(r===$s)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===vl)return s.RED;if(r===Ja)return s.RED_INTEGER;if(r===xl)return s.RG;if(r===Qa)return s.RG_INTEGER;if(r===eo)return s.RGBA_INTEGER;if(r===hs||r===us||r===ds||r===fs)if(l===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===us)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ds)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Tr||r===wr||r===Ar||r===Rr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Tr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ar)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===to)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Cr||r===Lr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Cr)return l===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Lr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pr||r===Dr||r===Ir||r===Ur||r===Fr||r===Nr||r===Or||r===kr||r===Hr||r===zr||r===Gr||r===Vr||r===Wr||r===Xr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Pr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Dr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ir)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ur)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Or)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ps||r===qr||r===Yr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ps)return l===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Yr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ml||r===$r||r===Kr||r===jr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ps)return a.COMPRESSED_RED_RGTC1_EXT;if(r===$r)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wn?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class If extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tn extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uf={type:"move"};class ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const f=t.getJointPose(g,n),d=this._getHandJoint(c,g);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,B=.005;c.inputState.pinching&&p>m+B?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-B&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ff extends ii{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,B=null;const g=t.getContextAttributes();let f=null,d=null;const y=[],v=[],b=new ke;let R=null;const w=new kt;w.layers.enable(1),w.viewport=new ut;const T=new kt;T.layers.enable(2),T.viewport=new ut;const V=[w,T],M=new If;M.layers.enable(1),M.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=y[k];return $===void 0&&($=new ks,y[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=y[k];return $===void 0&&($=new ks,y[k]=$),$.getGripSpace()},this.getHand=function(k){let $=y[k];return $===void 0&&($=new ks,y[k]=$),$.getHandSpace()};function G(k){const $=v.indexOf(k.inputSource);if($===-1)return;const oe=y[$];oe!==void 0&&(oe.update(k.inputSource,k.frame,c||o),oe.dispatchEvent({type:k.type,data:k.inputSource}))}function ee(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",ee),i.removeEventListener("inputsourceschange",C);for(let k=0;k<y.length;k++){const $=v[k];$!==null&&(v[k]=null,y[k].disconnect($))}E=null,H=null,e.setRenderTarget(f),m=null,p=null,u=null,i=null,d=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return B},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",ee),i.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Cn(m.framebufferWidth,m.framebufferHeight,{format:zt,type:un,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let $=null,oe=null,me=null;g.depth&&(me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=g.stencil?ti:An,oe=g.stencil?wn:on);const pe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=new XRWebGLBinding(i,t),p=u.createProjectionLayer(pe),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new Cn(p.textureWidth,p.textureHeight,{format:zt,type:un,depthTexture:new Bo(p.textureWidth,p.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const we=e.properties.get(d);we.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function C(k){for(let $=0;$<k.removed.length;$++){const oe=k.removed[$],me=v.indexOf(oe);me>=0&&(v[me]=null,y[me].disconnect(oe))}for(let $=0;$<k.added.length;$++){const oe=k.added[$];let me=v.indexOf(oe);if(me===-1){for(let we=0;we<y.length;we++)if(we>=v.length){v.push(oe),me=we;break}else if(v[we]===null){v[we]=oe,me=we;break}if(me===-1)break}const pe=y[me];pe&&pe.connect(oe)}}const O=new P,z=new P;function q(k,$,oe){O.setFromMatrixPosition($.matrixWorld),z.setFromMatrixPosition(oe.matrixWorld);const me=O.distanceTo(z),pe=$.projectionMatrix.elements,we=oe.projectionMatrix.elements,Re=pe[14]/(pe[10]-1),Me=pe[14]/(pe[10]+1),He=(pe[9]+1)/pe[5],D=(pe[9]-1)/pe[5],_t=(pe[8]-1)/pe[0],Be=(we[8]+1)/we[0],be=Re*_t,ue=Re*Be,je=me/(-_t+Be),Pe=je*-_t;$.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Pe),k.translateZ(je),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const S=Re+je,_=Me+je,U=be-Pe,Z=ue+(me-Pe),j=He*Me/_*S,J=D*Me/_*S;k.projectionMatrix.makePerspective(U,Z,j,J,S,_),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function W(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;M.near=T.near=w.near=k.near,M.far=T.far=w.far=k.far,(E!==M.near||H!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,H=M.far);const $=k.parent,oe=M.cameras;W(M,$);for(let me=0;me<oe.length;me++)W(oe[me],$);oe.length===2?q(M,w,T):M.projectionMatrix.copy(w.projectionMatrix),X(k,M,$)};function X(k,$,oe){oe===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(oe.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ks*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(k){l=k,p!==null&&(p.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let Y=null;function Q(k,$){if(h=$.getViewerPose(c||o),B=$,h!==null){const oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let me=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let pe=0;pe<oe.length;pe++){const we=oe[pe];let Re=null;if(m!==null)Re=m.getViewport(we);else{const He=u.getViewSubImage(p,we);Re=He.viewport,pe===0&&(e.setRenderTargetTextures(d,He.colorTexture,p.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(d))}let Me=V[pe];Me===void 0&&(Me=new kt,Me.layers.enable(pe),Me.viewport=new ut,V[pe]=Me),Me.matrix.fromArray(we.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(we.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Re.x,Re.y,Re.width,Re.height),pe===0&&(M.matrix.copy(Me.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(Me)}}for(let oe=0;oe<y.length;oe++){const me=v[oe],pe=y[oe];me!==null&&pe!==void 0&&pe.update(me,$,c||o)}Y&&Y(k,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),B=null}const te=new go;te.setAnimationLoop(Q),this.setAnimationLoop=function(k){Y=k},this.dispose=function(){}}}function Nf(s,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,fo(s)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function i(f,d,y,v,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),u(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d)):d.isMeshStandardMaterial?(r(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,b)):d.isMeshMatcapMaterial?(r(f,d),B(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),g(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?l(f,d,y,v):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Tt&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Tt&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(f.envMap.value=y,f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,f.lightMapTransform)}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,y,v){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*y,f.scale.value=v*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),e.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,y){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Tt&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function B(f,d){d.matcap&&(f.matcap.value=d.matcap)}function g(f,d){const y=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Of(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const b=v.program;n.uniformBlockBinding(y,b)}function c(y,v){let b=i[y.id];b===void 0&&(B(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",f));const R=v.program;n.updateUBOMapping(y,R);const w=e.render.frame;r[y.id]!==w&&(p(y),r[y.id]=w)}function h(y){const v=u();y.__bindingPointIndex=v;const b=s.createBuffer(),R=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,R,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const v=i[y.id],b=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,T=b.length;w<T;w++){const V=Array.isArray(b[w])?b[w]:[b[w]];for(let M=0,E=V.length;M<E;M++){const H=V[M];if(m(H,w,M,R)===!0){const G=H.__offset,ee=Array.isArray(H.value)?H.value:[H.value];let C=0;for(let O=0;O<ee.length;O++){const z=ee[O],q=g(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,G+C,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,C),C+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(y,v,b,R){const w=y.value,T=v+"_"+b;if(R[T]===void 0)return typeof w=="number"||typeof w=="boolean"?R[T]=w:R[T]=w.clone(),!0;{const V=R[T];if(typeof w=="number"||typeof w=="boolean"){if(V!==w)return R[T]=w,!0}else if(V.equals(w)===!1)return V.copy(w),!0}return!1}function B(y){const v=y.uniforms;let b=0;const R=16;for(let T=0,V=v.length;T<V;T++){const M=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,H=M.length;E<H;E++){const G=M[E],ee=Array.isArray(G.value)?G.value:[G.value];for(let C=0,O=ee.length;C<O;C++){const z=ee[C],q=g(z),W=b%R;W!==0&&R-W<q.boundary&&(b+=R-W),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=q.storage}}}const w=b%R;return w>0&&(b+=R-w),y.__size=b,y.__cache={},this}function g(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function f(y){const v=y.target;v.removeEventListener("dispose",f);const b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function d(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:d}}class yo{constructor(e={}){const{canvas:t=Dl(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),B=new Int32Array(4);let g=null,f=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nt,this._useLegacyLights=!1,this.toneMapping=hn,this.toneMappingExposure=1;const v=this;let b=!1,R=0,w=0,T=null,V=-1,M=null;const E=new ut,H=new ut;let G=null;const ee=new ze(0);let C=0,O=t.width,z=t.height,q=1,W=null,X=null;const Y=new ut(0,0,O,z),Q=new ut(0,0,O,z);let te=!1;const k=new ar;let $=!1,oe=!1,me=null;const pe=new it,we=new ke,Re=new P,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return T===null?q:1}let D=n;function _t(x,L){for(let F=0;F<x.length;F++){const N=x[F],I=t.getContext(N,L);if(I!==null)return I}return null}try{const x={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${er}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",A,!1),t.addEventListener("webglcontextcreationerror",se,!1),D===null){const L=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&L.shift(),D=_t(L,x),D===null)throw _t(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Be,be,ue,je,Pe,S,_,U,Z,j,J,de,ae,ce,xe,De,K,Ve,Oe,Ee,ge,he,Ce,Ge;function Je(){Be=new Yu(D),be=new zu(D,Be,e),Be.init(be),he=new Df(D,Be,be),ue=new Lf(D,Be,be),je=new ju(D),Pe=new Bf,S=new Pf(D,Be,ue,Pe,be,he,je),_=new Vu(v),U=new qu(v),Z=new sc(D,be),Ce=new ku(D,Be,Z,be),j=new $u(D,Z,je,Ce),J=new ed(D,j,Z,je),Oe=new Qu(D,be,S),De=new Gu(Pe),de=new gf(v,_,U,Be,be,Ce,De),ae=new Nf(v,Pe),ce=new vf,xe=new bf(Be,be),Ve=new Ou(v,_,U,ue,J,p,l),K=new Cf(v,J,be),Ge=new Of(D,je,be,ue),Ee=new Hu(D,Be,je,be),ge=new Ku(D,Be,je,be),je.programs=de.programs,v.capabilities=be,v.extensions=Be,v.properties=Pe,v.renderLists=ce,v.shadowMap=K,v.state=ue,v.info=je}Je();const Ue=new Ff(v,D);this.xr=Ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=Be.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Be.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(x){x!==void 0&&(q=x,this.setSize(O,z,!1))},this.getSize=function(x){return x.set(O,z)},this.setSize=function(x,L,F=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=x,z=L,t.width=Math.floor(x*q),t.height=Math.floor(L*q),F===!0&&(t.style.width=x+"px",t.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(O*q,z*q).floor()},this.setDrawingBufferSize=function(x,L,F){O=x,z=L,q=F,t.width=Math.floor(x*F),t.height=Math.floor(L*F),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(E)},this.getViewport=function(x){return x.copy(Y)},this.setViewport=function(x,L,F,N){x.isVector4?Y.set(x.x,x.y,x.z,x.w):Y.set(x,L,F,N),ue.viewport(E.copy(Y).multiplyScalar(q).floor())},this.getScissor=function(x){return x.copy(Q)},this.setScissor=function(x,L,F,N){x.isVector4?Q.set(x.x,x.y,x.z,x.w):Q.set(x,L,F,N),ue.scissor(H.copy(Q).multiplyScalar(q).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(x){ue.setScissorTest(te=x)},this.setOpaqueSort=function(x){W=x},this.setTransparentSort=function(x){X=x},this.getClearColor=function(x){return x.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(x=!0,L=!0,F=!0){let N=0;if(x){let I=!1;if(T!==null){const le=T.texture.format;I=le===eo||le===Qa||le===Ja}if(I){const le=T.texture.type,fe=le===un||le===on||le===nr||le===wn||le===ja||le===Za,ve=Ve.getClearColor(),ye=Ve.getClearAlpha(),Ie=ve.r,Te=ve.g,Ae=ve.b;fe?(m[0]=Ie,m[1]=Te,m[2]=Ae,m[3]=ye,D.clearBufferuiv(D.COLOR,0,m)):(B[0]=Ie,B[1]=Te,B[2]=Ae,B[3]=ye,D.clearBufferiv(D.COLOR,0,B))}else N|=D.COLOR_BUFFER_BIT}L&&(N|=D.DEPTH_BUFFER_BIT),F&&(N|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",A,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ce.dispose(),xe.dispose(),Pe.dispose(),_.dispose(),U.dispose(),J.dispose(),Ce.dispose(),Ge.dispose(),de.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",vt),Ue.removeEventListener("sessionend",Ye),me&&(me.dispose(),me=null),xt.stop()};function ne(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const x=je.autoReset,L=K.enabled,F=K.autoUpdate,N=K.needsUpdate,I=K.type;Je(),je.autoReset=x,K.enabled=L,K.autoUpdate=F,K.needsUpdate=N,K.type=I}function se(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function re(x){const L=x.target;L.removeEventListener("dispose",re),Se(L)}function Se(x){_e(x),Pe.remove(x)}function _e(x){const L=Pe.get(x).programs;L!==void 0&&(L.forEach(function(F){de.releaseProgram(F)}),x.isShaderMaterial&&de.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,F,N,I,le){L===null&&(L=Me);const fe=I.isMesh&&I.matrixWorld.determinant()<0,ve=Ro(x,L,F,N,I);ue.setMaterial(N,fe);let ye=F.index,Ie=1;if(N.wireframe===!0){if(ye=j.getWireframeAttribute(F),ye===void 0)return;Ie=2}const Te=F.drawRange,Ae=F.attributes.position;let et=Te.start*Ie,wt=(Te.start+Te.count)*Ie;le!==null&&(et=Math.max(et,le.start*Ie),wt=Math.min(wt,(le.start+le.count)*Ie)),ye!==null?(et=Math.max(et,0),wt=Math.min(wt,ye.count)):Ae!=null&&(et=Math.max(et,0),wt=Math.min(wt,Ae.count));const lt=wt-et;if(lt<0||lt===1/0)return;Ce.setup(I,N,ve,F,ye);let Xt,Ze=Ee;if(ye!==null&&(Xt=Z.get(ye),Ze=ge,Ze.setIndex(Xt)),I.isMesh)N.wireframe===!0?(ue.setLineWidth(N.wireframeLinewidth*He()),Ze.setMode(D.LINES)):Ze.setMode(D.TRIANGLES);else if(I.isLine){let Fe=N.linewidth;Fe===void 0&&(Fe=1),ue.setLineWidth(Fe*He()),I.isLineSegments?Ze.setMode(D.LINES):I.isLineLoop?Ze.setMode(D.LINE_LOOP):Ze.setMode(D.LINE_STRIP)}else I.isPoints?Ze.setMode(D.POINTS):I.isSprite&&Ze.setMode(D.TRIANGLES);if(I.isBatchedMesh)Ze.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)Ze.renderInstances(et,lt,I.count);else if(F.isInstancedBufferGeometry){const Fe=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,rs=Math.min(F.instanceCount,Fe);Ze.renderInstances(et,lt,rs)}else Ze.render(et,lt)};function Xe(x,L,F){x.transparent===!0&&x.side===ht&&x.forceSinglePass===!1?(x.side=Tt,x.needsUpdate=!0,Mi(x,L,F),x.side=dn,x.needsUpdate=!0,Mi(x,L,F),x.side=ht):Mi(x,L,F)}this.compile=function(x,L,F=null){F===null&&(F=x),f=xe.get(F),f.init(),y.push(f),F.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),x!==F&&x.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights(v._useLegacyLights);const N=new Set;return x.traverse(function(I){const le=I.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){const ve=le[fe];Xe(ve,F,I),N.add(ve)}else Xe(le,F,I),N.add(le)}),y.pop(),f=null,N},this.compileAsync=function(x,L,F=null){const N=this.compile(x,L,F);return new Promise(I=>{function le(){if(N.forEach(function(fe){Pe.get(fe).currentProgram.isReady()&&N.delete(fe)}),N.size===0){I(x);return}setTimeout(le,10)}Be.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let qe=null;function ot(x){qe&&qe(x)}function vt(){xt.stop()}function Ye(){xt.start()}const xt=new go;xt.setAnimationLoop(ot),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(x){qe=x,Ue.setAnimationLoop(x),x===null?xt.stop():xt.start()},Ue.addEventListener("sessionstart",vt),Ue.addEventListener("sessionend",Ye),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(L),L=Ue.getCamera()),x.isScene===!0&&x.onBeforeRender(v,x,L,T),f=xe.get(x,y.length),f.init(),y.push(f),pe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),k.setFromProjectionMatrix(pe),oe=this.localClippingEnabled,$=De.init(this.clippingPlanes,oe),g=ce.get(x,d.length),g.init(),d.push(g),Gt(x,L,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(W,X),this.info.render.frame++,$===!0&&De.beginShadows();const F=f.state.shadowsArray;if(K.render(F,x,L),$===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ve.render(g,x),f.setupLights(v._useLegacyLights),L.isArrayCamera){const N=L.cameras;for(let I=0,le=N.length;I<le;I++){const fe=N[I];fr(g,x,fe,fe.viewport)}}else fr(g,x,L);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),x.isScene===!0&&x.onAfterRender(v,x,L),Ce.resetDefaultState(),V=-1,M=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Gt(x,L,F,N){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||k.intersectsSprite(x)){N&&Re.setFromMatrixPosition(x.matrixWorld).applyMatrix4(pe);const fe=J.update(x),ve=x.material;ve.visible&&g.push(x,fe,ve,F,Re.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||k.intersectsObject(x))){const fe=J.update(x),ve=x.material;if(N&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Re.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Re.copy(fe.boundingSphere.center)),Re.applyMatrix4(x.matrixWorld).applyMatrix4(pe)),Array.isArray(ve)){const ye=fe.groups;for(let Ie=0,Te=ye.length;Ie<Te;Ie++){const Ae=ye[Ie],et=ve[Ae.materialIndex];et&&et.visible&&g.push(x,fe,et,F,Re.z,Ae)}}else ve.visible&&g.push(x,fe,ve,F,Re.z,null)}}const le=x.children;for(let fe=0,ve=le.length;fe<ve;fe++)Gt(le[fe],L,F,N)}function fr(x,L,F,N){const I=x.opaque,le=x.transmissive,fe=x.transparent;f.setupLightsView(F),$===!0&&De.setGlobalState(v.clippingPlanes,F),le.length>0&&Ao(I,le,L,F),N&&ue.viewport(E.copy(N)),I.length>0&&xi(I,L,F),le.length>0&&xi(le,L,F),fe.length>0&&xi(fe,L,F),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ao(x,L,F,N){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const le=be.isWebGL2;me===null&&(me=new Cn(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")?gi:un,minFilter:mi,samples:le?4:0})),v.getDrawingBufferSize(we),le?me.setSize(we.x,we.y):me.setSize(js(we.x),js(we.y));const fe=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(ee),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();const ve=v.toneMapping;v.toneMapping=hn,xi(x,F,N),S.updateMultisampleRenderTarget(me),S.updateRenderTargetMipmap(me);let ye=!1;for(let Ie=0,Te=L.length;Ie<Te;Ie++){const Ae=L[Ie],et=Ae.object,wt=Ae.geometry,lt=Ae.material,Xt=Ae.group;if(lt.side===ht&&et.layers.test(N.layers)){const Ze=lt.side;lt.side=Tt,lt.needsUpdate=!0,pr(et,F,N,wt,lt,Xt),lt.side=Ze,lt.needsUpdate=!0,ye=!0}}ye===!0&&(S.updateMultisampleRenderTarget(me),S.updateRenderTargetMipmap(me)),v.setRenderTarget(fe),v.setClearColor(ee,C),v.toneMapping=ve}function xi(x,L,F){const N=L.isScene===!0?L.overrideMaterial:null;for(let I=0,le=x.length;I<le;I++){const fe=x[I],ve=fe.object,ye=fe.geometry,Ie=N===null?fe.material:N,Te=fe.group;ve.layers.test(F.layers)&&pr(ve,L,F,ye,Ie,Te)}}function pr(x,L,F,N,I,le){x.onBeforeRender(v,L,F,N,I,le),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(v,L,F,N,x,le),I.transparent===!0&&I.side===ht&&I.forceSinglePass===!1?(I.side=Tt,I.needsUpdate=!0,v.renderBufferDirect(F,L,N,I,x,le),I.side=dn,I.needsUpdate=!0,v.renderBufferDirect(F,L,N,I,x,le),I.side=ht):v.renderBufferDirect(F,L,N,I,x,le),x.onAfterRender(v,L,F,N,I,le)}function Mi(x,L,F){L.isScene!==!0&&(L=Me);const N=Pe.get(x),I=f.state.lights,le=f.state.shadowsArray,fe=I.state.version,ve=de.getParameters(x,I.state,le,L,F),ye=de.getProgramCacheKey(ve);let Ie=N.programs;N.environment=x.isMeshStandardMaterial?L.environment:null,N.fog=L.fog,N.envMap=(x.isMeshStandardMaterial?U:_).get(x.envMap||N.environment),Ie===void 0&&(x.addEventListener("dispose",re),Ie=new Map,N.programs=Ie);let Te=Ie.get(ye);if(Te!==void 0){if(N.currentProgram===Te&&N.lightsStateVersion===fe)return gr(x,ve),Te}else ve.uniforms=de.getUniforms(x),x.onBuild(F,ve,v),x.onBeforeCompile(ve,v),Te=de.acquireProgram(ve,ye),Ie.set(ye,Te),N.uniforms=ve.uniforms;const Ae=N.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ae.clippingPlanes=De.uniform),gr(x,ve),N.needsLights=Lo(x),N.lightsStateVersion=fe,N.needsLights&&(Ae.ambientLightColor.value=I.state.ambient,Ae.lightProbe.value=I.state.probe,Ae.directionalLights.value=I.state.directional,Ae.directionalLightShadows.value=I.state.directionalShadow,Ae.spotLights.value=I.state.spot,Ae.spotLightShadows.value=I.state.spotShadow,Ae.rectAreaLights.value=I.state.rectArea,Ae.ltc_1.value=I.state.rectAreaLTC1,Ae.ltc_2.value=I.state.rectAreaLTC2,Ae.pointLights.value=I.state.point,Ae.pointLightShadows.value=I.state.pointShadow,Ae.hemisphereLights.value=I.state.hemi,Ae.directionalShadowMap.value=I.state.directionalShadowMap,Ae.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ae.spotShadowMap.value=I.state.spotShadowMap,Ae.spotLightMatrix.value=I.state.spotLightMatrix,Ae.spotLightMap.value=I.state.spotLightMap,Ae.pointShadowMap.value=I.state.pointShadowMap,Ae.pointShadowMatrix.value=I.state.pointShadowMatrix),N.currentProgram=Te,N.uniformsList=null,Te}function mr(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=Yi.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function gr(x,L){const F=Pe.get(x);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function Ro(x,L,F,N,I){L.isScene!==!0&&(L=Me),S.resetTextureUnits();const le=L.fog,fe=N.isMeshStandardMaterial?L.environment:null,ve=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:en,ye=(N.isMeshStandardMaterial?U:_).get(N.envMap||fe),Ie=N.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Te=!!F.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Ae=!!F.morphAttributes.position,et=!!F.morphAttributes.normal,wt=!!F.morphAttributes.color;let lt=hn;N.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(lt=v.toneMapping);const Xt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ze=Xt!==void 0?Xt.length:0,Fe=Pe.get(N),rs=f.state.lights;if($===!0&&(oe===!0||x!==M)){const Pt=x===M&&N.id===V;De.setState(N,x,Pt)}let Qe=!1;N.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==rs.state.version||Fe.outputColorSpace!==ve||I.isBatchedMesh&&Fe.batching===!1||!I.isBatchedMesh&&Fe.batching===!0||I.isInstancedMesh&&Fe.instancing===!1||!I.isInstancedMesh&&Fe.instancing===!0||I.isSkinnedMesh&&Fe.skinning===!1||!I.isSkinnedMesh&&Fe.skinning===!0||I.isInstancedMesh&&Fe.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Fe.instancingColor===!1&&I.instanceColor!==null||Fe.envMap!==ye||N.fog===!0&&Fe.fog!==le||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==De.numPlanes||Fe.numIntersection!==De.numIntersection)||Fe.vertexAlphas!==Ie||Fe.vertexTangents!==Te||Fe.morphTargets!==Ae||Fe.morphNormals!==et||Fe.morphColors!==wt||Fe.toneMapping!==lt||be.isWebGL2===!0&&Fe.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Fe.__version=N.version);let pn=Fe.currentProgram;Qe===!0&&(pn=Mi(N,L,I));let Br=!1,li=!1,as=!1;const ft=pn.getUniforms(),mn=Fe.uniforms;if(ue.useProgram(pn.program)&&(Br=!0,li=!0,as=!0),N.id!==V&&(V=N.id,li=!0),Br||M!==x){ft.setValue(D,"projectionMatrix",x.projectionMatrix),ft.setValue(D,"viewMatrix",x.matrixWorldInverse);const Pt=ft.map.cameraPosition;Pt!==void 0&&Pt.setValue(D,Re.setFromMatrixPosition(x.matrixWorld)),be.logarithmicDepthBuffer&&ft.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ft.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,li=!0,as=!0)}if(I.isSkinnedMesh){ft.setOptional(D,I,"bindMatrix"),ft.setOptional(D,I,"bindMatrixInverse");const Pt=I.skeleton;Pt&&(be.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),ft.setValue(D,"boneTexture",Pt.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(ft.setOptional(D,I,"batchingTexture"),ft.setValue(D,"batchingTexture",I._matricesTexture,S));const os=F.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0&&be.isWebGL2===!0)&&Oe.update(I,F,pn),(li||Fe.receiveShadow!==I.receiveShadow)&&(Fe.receiveShadow=I.receiveShadow,ft.setValue(D,"receiveShadow",I.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(mn.envMap.value=ye,mn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),li&&(ft.setValue(D,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&Co(mn,as),le&&N.fog===!0&&ae.refreshFogUniforms(mn,le),ae.refreshMaterialUniforms(mn,N,q,z,me),Yi.upload(D,mr(Fe),mn,S)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Yi.upload(D,mr(Fe),mn,S),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ft.setValue(D,"center",I.center),ft.setValue(D,"modelViewMatrix",I.modelViewMatrix),ft.setValue(D,"normalMatrix",I.normalMatrix),ft.setValue(D,"modelMatrix",I.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Pt=N.uniformsGroups;for(let ls=0,Po=Pt.length;ls<Po;ls++)if(be.isWebGL2){const _r=Pt[ls];Ge.update(_r,pn),Ge.bind(_r,pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pn}function Co(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Lo(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(x,L,F){Pe.get(x.texture).__webglTexture=L,Pe.get(x.depthTexture).__webglTexture=F;const N=Pe.get(x);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=F===void 0,N.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,L){const F=Pe.get(x);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,F=0){T=x,R=L,w=F;let N=!0,I=null,le=!1,fe=!1;if(x){const ye=Pe.get(x);ye.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(D.FRAMEBUFFER,null),N=!1):ye.__webglFramebuffer===void 0?S.setupRenderTarget(x):ye.__hasExternalTextures&&S.rebindTextures(x,Pe.get(x.texture).__webglTexture,Pe.get(x.depthTexture).__webglTexture);const Ie=x.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(fe=!0);const Te=Pe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Te[L])?I=Te[L][F]:I=Te[L],le=!0):be.isWebGL2&&x.samples>0&&S.useMultisampledRTT(x)===!1?I=Pe.get(x).__webglMultisampledFramebuffer:Array.isArray(Te)?I=Te[F]:I=Te,E.copy(x.viewport),H.copy(x.scissor),G=x.scissorTest}else E.copy(Y).multiplyScalar(q).floor(),H.copy(Q).multiplyScalar(q).floor(),G=te;if(ue.bindFramebuffer(D.FRAMEBUFFER,I)&&be.drawBuffers&&N&&ue.drawBuffers(x,I),ue.viewport(E),ue.scissor(H),ue.setScissorTest(G),le){const ye=Pe.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,ye.__webglTexture,F)}else if(fe){const ye=Pe.get(x.texture),Ie=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.__webglTexture,F||0,Ie)}V=-1},this.readRenderTargetPixels=function(x,L,F,N,I,le,fe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Pe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){ue.bindFramebuffer(D.FRAMEBUFFER,ve);try{const ye=x.texture,Ie=ye.format,Te=ye.type;if(Ie!==zt&&he.convert(Ie)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ae=Te===gi&&(Be.has("EXT_color_buffer_half_float")||be.isWebGL2&&Be.has("EXT_color_buffer_float"));if(Te!==un&&he.convert(Te)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Te===ln&&(be.isWebGL2||Be.has("OES_texture_float")||Be.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-N&&F>=0&&F<=x.height-I&&D.readPixels(L,F,N,I,he.convert(Ie),he.convert(Te),le)}finally{const ye=T!==null?Pe.get(T).__webglFramebuffer:null;ue.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(x,L,F=0){const N=Math.pow(2,-F),I=Math.floor(L.image.width*N),le=Math.floor(L.image.height*N);S.setTexture2D(L,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,x.x,x.y,I,le),ue.unbindTexture()},this.copyTextureToTexture=function(x,L,F,N=0){const I=L.image.width,le=L.image.height,fe=he.convert(F.format),ve=he.convert(F.type);S.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment),L.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,x.x,x.y,I,le,fe,ve,L.image.data):L.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,x.x,x.y,L.mipmaps[0].width,L.mipmaps[0].height,fe,L.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,N,x.x,x.y,fe,ve,L.image),N===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(x,L,F,N,I=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=x.max.x-x.min.x+1,fe=x.max.y-x.min.y+1,ve=x.max.z-x.min.z+1,ye=he.convert(N.format),Ie=he.convert(N.type);let Te;if(N.isData3DTexture)S.setTexture3D(N,0),Te=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)S.setTexture2DArray(N,0),Te=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Ae=D.getParameter(D.UNPACK_ROW_LENGTH),et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),wt=D.getParameter(D.UNPACK_SKIP_PIXELS),lt=D.getParameter(D.UNPACK_SKIP_ROWS),Xt=D.getParameter(D.UNPACK_SKIP_IMAGES),Ze=F.isCompressedTexture?F.mipmaps[I]:F.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ze.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,x.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,x.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,x.min.z),F.isDataTexture||F.isData3DTexture?D.texSubImage3D(Te,I,L.x,L.y,L.z,le,fe,ve,ye,Ie,Ze.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Te,I,L.x,L.y,L.z,le,fe,ve,ye,Ze.data)):D.texSubImage3D(Te,I,L.x,L.y,L.z,le,fe,ve,ye,Ie,Ze),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,wt),D.pixelStorei(D.UNPACK_SKIP_ROWS,lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xt),I===0&&N.generateMipmaps&&D.generateMipmap(Te),ue.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?S.setTextureCube(x,0):x.isData3DTexture?S.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?S.setTexture2DArray(x,0):S.setTexture2D(x,0),ue.unbindTexture()},this.resetState=function(){R=0,w=0,T=null,ue.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ir?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===ts?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nt?Rn:no}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Rn?nt:en}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class kf extends yo{}kf.prototype.isWebGL1Renderer=!0;class Hf extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Eo extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ka=new it,Js=new sr,Wi=new ns,Xi=new P;class zf extends st{constructor(e=new Lt,t=new Eo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(i),Wi.radius+=r,e.ray.intersectsSphere(Wi)===!1)return;ka.copy(i).invert(),Js.copy(e.ray).applyMatrix4(ka);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let B=p,g=m;B<g;B++){const f=c.getX(B);Xi.fromBufferAttribute(u,f),Ha(Xi,f,l,i,e,t,this)}}else{const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let B=p,g=m;B<g;B++)Xi.fromBufferAttribute(u,B),Ha(Xi,B,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ha(s,e,t,n,i,r,o){const a=Js.distanceSqToPoint(s);if(a<t){const l=new P;Js.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class za extends St{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cr extends Lt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new P,h=new ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){const m=n+u/t*i;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class hr extends Lt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,p=new P,m=[],B=[],g=[],f=[];for(let d=0;d<=n;d++){const y=[],v=d/n;let b=0;d===0&&o===0?b=.5/t:d===n&&l===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){const w=R/t;u.x=-e*Math.cos(i+w*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+w*r)*Math.sin(o+v*a),B.push(u.x,u.y,u.z),p.copy(u).normalize(),g.push(p.x,p.y,p.z),f.push(w+b,1-v),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){const v=h[d][y+1],b=h[d][y],R=h[d+1][y],w=h[d+1][y+1];(d!==0||o>0)&&m.push(v,b,w),(d!==n-1||l<Math.PI)&&m.push(b,R,w)}this.setIndex(m),this.setAttribute("position",new Bt(B,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ur extends Lt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new P,u=new P,p=new P;for(let m=0;m<=n;m++)for(let B=0;B<=i;B++){const g=B/i*r,f=m/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(g),u.y=(e+t*Math.cos(f))*Math.sin(g),u.z=t*Math.sin(f),a.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(B/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let B=1;B<=i;B++){const g=(i+1)*m+B-1,f=(i+1)*(m-1)+B-1,d=(i+1)*(m-1)+B,y=(i+1)*m+B;o.push(g,f,y),o.push(f,d,y)}this.setIndex(o),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Wt extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Qi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Gf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){const m=c[u],B=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return B}return null}}}const Vf=new Gf;class vi{constructor(e){this.manager=e!==void 0?e:Vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zt={};class Wf extends Error{constructor(e,t){super(e),this.response=t}}class Xf extends vi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Qi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zt[e]!==void 0){Zt[e].push({onLoad:t,onProgress:n,onError:i});return}Zt[e]=[],Zt[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Zt[e],u=c.body.getReader(),p=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=p?parseInt(p):0,B=m!==0;let g=0;const f=new ReadableStream({start(d){y();function y(){u.read().then(({done:v,value:b})=>{if(v)d.close();else{g+=b.byteLength;const R=new ProgressEvent("progress",{lengthComputable:B,loaded:g,total:m});for(let w=0,T=h.length;w<T;w++){const V=h[w];V.onProgress&&V.onProgress(R)}d.enqueue(b),y()}})}}});return new Response(f)}else throw new Wf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),p=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(p);return c.arrayBuffer().then(B=>m.decode(B))}}}).then(c=>{Qi.add(e,c);const h=Zt[e];delete Zt[e];for(let u=0,p=h.length;u<p;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=Zt[e];if(h===void 0)throw this.manager.itemError(e),c;delete Zt[e];for(let u=0,p=h.length;u<p;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qf extends vi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Qi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Bi("img");function l(){h(),Qi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class bo extends vi{constructor(e){super(e)}load(e,t,n,i){const r=new St,o=new qf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class To extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Hs=new it,Ga=new P,Va=new P;class Yf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ga.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ga),Va.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Va),t.updateMatrixWorld(),Hs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $f extends Yf{constructor(){super(new or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kf extends To{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new $f}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jf extends To{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let qi;class wo{static getContext(){return qi===void 0&&(qi=new(window.AudioContext||window.webkitAudioContext)),qi}static setContext(e){qi=e}}class Zf extends vi{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Xf(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);wo.getContext().decodeAudioData(c,function(u){t(u)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):console.error(l),r.manager.itemError(e)}}}class Jf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wa();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wa(){return(typeof performance>"u"?Date:performance).now()}const xn=new P,Xa=new si,Qf=new P,Mn=new P;class ep extends st{constructor(){super(),this.type="AudioListener",this.context=wo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Jf}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(xn,Xa,Qf),Mn.set(0,0,-1).applyQuaternion(Xa),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(xn.x,i),t.positionY.linearRampToValueAtTime(xn.y,i),t.positionZ.linearRampToValueAtTime(xn.z,i),t.forwardX.linearRampToValueAtTime(Mn.x,i),t.forwardY.linearRampToValueAtTime(Mn.y,i),t.forwardZ.linearRampToValueAtTime(Mn.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(xn.x,xn.y,xn.z),t.setOrientation(Mn.x,Mn.y,Mn.z,n.x,n.y,n.z)}}class tp extends st{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class np{constructor(e,t,n=0,i=1/0){this.ray=new sr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Qs(e,this,n,t),n.sort(qa),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Qs(e[i],this,n,t);return n.sort(qa),n}}function qa(s,e){return s.distance-e.distance}function Qs(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Qs(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:er}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=er);class ip{constructor(e,t){this.scene=e,this.blockManager=t,this.isJumping=!1,this.isFalling=!1,this.velocity=0,this.isColliding=!1,this.isFreezingForPortal=!1,this.position={x:0,y:-3.75,z:0},this.defaultSpeed=.1,this.speed=this.defaultSpeed,this.initialSpeed=.08,this.baseGravity=.015,this.baseJumpForce=.28,this.terminalVelocity=-.3,this.fastSpeedMultiplier=1.6,this.slowSpeedMultiplier=.4,this.isRightKeyHeld=!1,this.isLeftKeyHeld=!1,this.isJumpKeyHeld=!1,this.jumpKeyPressed=!1,this.jumpBufferFrames=0,this.maxJumpBufferFrames=4,this.jumpLandBuffer=0,this.maxJumpLandBuffer=3,this.width=.4,this.height=.5,this.textureLoader=new bo,this.sprites=[],this.currentFrame=0,this.baseAnimationSpeed=40,this.animationTimer=0,this.loadSprites(),this.createMesh(),this.createEyes()}loadSprites(){const e="/game/";for(let t=1;t<=6;t++){const n=t.toString().padStart(2,"0"),i=`${e}sprites/player/player${n}.png`,r=this.textureLoader.load(i);r.magFilter=dt,r.minFilter=dt,this.sprites.push(r)}}createMesh(){const e=new gt(this.width,this.height),t=new Wt({map:this.sprites[0],transparent:!0,alphaTest:.1,side:ht,roughness:1,metalness:0,emissiveMap:this.sprites[0],emissiveIntensity:1});this.mesh=new Ke(e,t),this.mesh.position.set(this.position.x,this.position.y,this.position.z),this.mesh.castShadow=!0,this.mesh.receiveShadow=!1,this.scene.add(this.mesh)}createEyes(){this.eyesGroup=new Tn;const e=.01,t=10*e,n=3*e,i=3*e,r=3*e,o=9*e,a=17*e,l=this.width/2-n-r/2,c=l-r/2-i-o/2,h=this.height/2-t-a/2,u=.01,p=new gt(r,a),m=new fn({color:16777215});this.rightEye=new Ke(p,m),this.rightEye.position.set(l,h,u);const B=new gt(o,a),g=new fn({color:16777215});this.leftEye=new Ke(B,g),this.leftEye.position.set(c,h,u),this.leftEye.scale.set(1,1,1),this.rightEye.scale.set(1,1,1),this.eyesGroup.add(this.rightEye),this.eyesGroup.add(this.leftEye),this.mesh.add(this.eyesGroup),this.eyesGroup.visible=!1,this.eyeOriginalProperties={height:a,leftEyeY:this.leftEye.position.y,rightEyeY:this.rightEye.position.y,minBlinkHeight:3*e},this.blinkProperties={isBlinking:!1,blinkTimer:0,blinkInterval:Math.random()*3+2,blinkDuration:.25,blinkProgress:0}}showEyes(){this.eyesGroup&&(this.eyesGroup.visible=!0)}updateAnimation(e){if(this.updateEyeBlinking(e),this.isColliding){this.mesh.material.map!==this.sprites[0]&&(this.mesh.material.map=this.sprites[0],this.mesh.material.emissiveMap=this.sprites[0]);return}if(!this.isJumping&&!this.isFalling){const t=this.speed/this.defaultSpeed,i=1/(this.baseAnimationSpeed*t);this.animationTimer+=1/60*e,this.animationTimer>=i&&(this.currentFrame=(this.currentFrame+1)%this.sprites.length,this.mesh.material.map=this.sprites[this.currentFrame],this.mesh.material.emissiveMap=this.sprites[this.currentFrame],this.animationTimer=0)}else this.mesh.material.map!==this.sprites[1]&&(this.mesh.material.map=this.sprites[1],this.mesh.material.emissiveMap=this.sprites[1]);this.mesh.material.needsUpdate=!0}updateEyeBlinking(e){if(!this.eyesGroup||!this.leftEye||!this.rightEye)return;const t=1/60*e;if(this.blinkProperties.isBlinking)if(this.blinkProperties.blinkProgress+=t/this.blinkProperties.blinkDuration,this.blinkProperties.blinkProgress>=1)this.blinkProperties.isBlinking=!1,this.blinkProperties.blinkProgress=0,this.blinkProperties.blinkInterval=Math.random()*3+2,this.blinkProperties.blinkTimer=0,this.leftEye.scale.y=1,this.rightEye.scale.y=1,this.leftEye.position.y=this.eyeOriginalProperties.leftEyeY,this.rightEye.position.y=this.eyeOriginalProperties.rightEyeY;else{const n=Math.sin(this.blinkProperties.blinkProgress*Math.PI),i=this.eyeOriginalProperties.height-n*(this.eyeOriginalProperties.height-this.eyeOriginalProperties.minBlinkHeight),r=i/this.eyeOriginalProperties.height,o=(this.eyeOriginalProperties.height-i)*1/3;this.leftEye.scale.y=r,this.rightEye.scale.y=r,this.leftEye.position.y=this.eyeOriginalProperties.leftEyeY-o,this.rightEye.position.y=this.eyeOriginalProperties.rightEyeY-o}else this.blinkProperties.blinkTimer+=t,this.blinkProperties.blinkTimer>=this.blinkProperties.blinkInterval&&(this.blinkProperties.isBlinking=!0,this.blinkProperties.blinkProgress=0)}jump(){if(!this.isJumping&&!this.isFalling&&(this.jumpKeyPressed||this.jumpLandBuffer>0)||this.jumpBufferFrames>0&&this.jumpKeyPressed){const e={left:this.position.x-this.width/2,right:this.position.x+this.width/2,top:this.position.y+this.height/2+.1,bottom:this.position.y-this.height/2},t=this.blockManager.checkVerticalCollision(e,this.baseJumpForce);(!t.collision||t.direction!=="up")&&(this.isJumping=!0,this.isFalling=!1,this.jumpBufferFrames=0,this.jumpLandBuffer=0,this.velocity=this.baseJumpForce,this.jumpKeyPressed=!1)}else this.isFalling&&this.jumpKeyPressed&&(this.jumpLandBuffer=this.maxJumpLandBuffer,this.jumpKeyPressed=!1)}setJumpKeyHeld(e){e&&!this.isJumpKeyHeld&&(this.jumpKeyPressed=!0),this.isJumpKeyHeld=e}setRightKeyHeld(e){this.isRightKeyHeld=e,this.updateSpeed()}setLeftKeyHeld(e){this.isLeftKeyHeld=e,this.updateSpeed()}updateSpeed(){this.isRightKeyHeld?this.speed=this.defaultSpeed*this.fastSpeedMultiplier:this.isLeftKeyHeld?this.speed=this.defaultSpeed*this.slowSpeedMultiplier:this.speed=this.defaultSpeed}reset(){this.isJumping=!1,this.isFalling=!1,this.isColliding=!1,this.isFreezingForPortal=!1,this.velocity=0,this.position={x:0,y:-3.75,z:0},this.speed=this.defaultSpeed,this.isRightKeyHeld=!1,this.isLeftKeyHeld=!1,this.currentFrame=0,this.animationTimer=0,this.isJumpKeyHeld=!1,this.jumpKeyPressed=!1,this.jumpBufferFrames=0,this.jumpLandBuffer=0,this.mesh.material.map=this.sprites[0],this.mesh.material.emissiveMap=this.sprites[0],this.mesh.position.set(this.position.x,this.position.y,this.position.z),this.mesh.visible=!0,this.blinkProperties&&(this.blinkProperties.isBlinking=!1,this.blinkProperties.blinkProgress=0,this.blinkProperties.blinkTimer=0,this.blinkProperties.blinkInterval=Math.random()*3+2,this.leftEye&&this.rightEye&&this.eyeOriginalProperties&&(this.leftEye.scale.y=1,this.rightEye.scale.y=1,this.leftEye.position.y=this.eyeOriginalProperties.leftEyeY,this.rightEye.position.y=this.eyeOriginalProperties.rightEyeY))}die(){return this.mesh.visible=!1,{x:this.mesh.position.x,y:this.mesh.position.y,z:this.mesh.position.z}}getBounds(){return{left:this.position.x-this.width/2,right:this.position.x+this.width/2,top:this.position.y+this.height/2,bottom:this.position.y-this.height/2}}animateEyes(e){this.updateEyeBlinking(e)}update(e){if(this.isFreezingForPortal)return;const t=this.getBounds(),n=this.position.x+this.speed*e,i={left:n-this.width/2,right:n+this.width/2,top:t.top,bottom:t.bottom},r=this.blockManager.checkHorizontalCollision(i);if(r.collision?(this.isColliding=!0,this.position.x=r.blockX-this.width/2):(this.isColliding=!1,this.position.x=n),this.isJumping||this.isFalling){this.isJumping&&this.velocity>0&&(this.isJumpKeyHeld||(this.velocity=0));const o=this.baseGravity*e;this.velocity=this.velocity-o,this.velocity<this.terminalVelocity&&(this.velocity=this.terminalVelocity);const a=Math.abs(this.velocity*e),l=Math.max(1,Math.ceil(a/.2)),c=this.velocity*e/l;let h=!1,u=this.position.y;for(let p=0;p<l&&!h;p++){const m=this.position.y+c,B={left:this.position.x-this.width/2,right:this.position.x+this.width/2,top:m+this.height/2,bottom:m-this.height/2},g=this.blockManager.checkVerticalCollision(B,this.velocity);if(g.collision)h=!0,g.direction==="up"?(u=g.blockY-this.height/2,this.velocity=0,this.isJumping=!1,this.isFalling=!0,this.velocity=-.03):g.direction==="down"&&(u=g.blockY+this.height/2,this.isJumping=!1,this.isFalling=!1,this.velocity=0);else{const f=this.blockManager.findGroundYAtPosition(this.position.x,B.bottom);f!==null&&B.bottom<=f&&this.velocity<0?(u=f+this.height/2,this.isJumping=!1,this.isFalling=!1,this.velocity=0,h=!0):p===l-1?(u=m,this.isJumping&&this.velocity<=0&&(this.isJumping=!1,this.isFalling=!0)):this.position.y=m}}this.position.y=u}else{const o=this.getBounds();this.blockManager.checkVerticalCollision({left:o.left,right:o.right,top:o.top,bottom:o.bottom-.05},this.velocity).collision||(this.isFalling=!0,this.velocity=0,this.jumpBufferFrames=this.maxJumpBufferFrames)}return this.isFalling?this.jumpBufferFrames>0&&(this.jumpBufferFrames=Math.max(0,this.jumpBufferFrames-e)):this.isJumping||this.jumpLandBuffer>0&&(this.jump(),this.jumpLandBuffer=0),this.mesh.position.set(this.position.x,this.position.y,this.position.z),this.updateAnimation(e),!0}getBoundingBox(){return new Pn().setFromObject(this.mesh)}}class sp{constructor(e,t){this.scene=e,this.blockManager=t,this.obstacles=[],this.obstacleSize=.5,this.obstacleTypes=[{color:0}]}reset(){this.obstacles.forEach(e=>{this.scene.remove(e.mesh)}),this.obstacles=[]}createSpike(e,t){const n=new Lt,i=new Float32Array([-.25,0,.025,.25,0,.025,0,.5,.025,-.25,0,-.025,.25,0,-.025,0,.5,-.025]),r=[0,1,2,5,4,3];n.setAttribute("position",new Ct(i,3)),n.setIndex(r),n.computeVertexNormals();const o=new Wt({color:this.obstacleTypes[0].color,roughness:.7,metalness:.2,emissive:this.obstacleTypes[0].color,emissiveIntensity:1,side:ht}),a=new Ke(n,o);a.castShadow=!0,a.position.set(e+.25,t,0),a.receiveShadow=!1,this.scene.add(a);const l={left:e,right:e+.5,top:t+.5,bottom:t};return a.userData={bounds:l,isSpike:!0},this.obstacles.push({mesh:a,type:0,bounds:l}),{mesh:a,bounds:l}}getObstacles(){return this.obstacles.map(e=>e.mesh)}getObstacleBounds(){return this.obstacles.map(e=>e.bounds)}}class rp{constructor(e){this.scene=e,this.blocks=[],this.blockGrid={},this.gridCellSize=5,this.blockWidth=4,this.blockHeight=1,this.baseGroundY=-5}getGridKey(e){return Math.floor(e/this.gridCellSize)}addBlockToGrid(e){const t=this.getGridKey(e.bounds.left),n=this.getGridKey(e.bounds.right);for(let i=t;i<=n;i++)this.blockGrid[i]||(this.blockGrid[i]=[]),this.blockGrid[i].push(e)}removeBlockFromGrid(e){const t=this.getGridKey(e.bounds.left),n=this.getGridKey(e.bounds.right);for(let i=t;i<=n;i++)if(this.blockGrid[i]){const r=this.blockGrid[i].indexOf(e);r!==-1&&this.blockGrid[i].splice(r,1),this.blockGrid[i].length===0&&delete this.blockGrid[i]}}createBlock(e,t,n,i){const r=new ai(n,i,.1),o=new Wt({color:0,emissive:0,emissiveIntensity:1}),a=new Ke(r,o);a.position.set(e+n/2,t+i/2,0),a.castShadow=!0,a.receiveShadow=!1,this.scene.add(a);const l={mesh:a,x:e,y:t,width:n,height:i,bounds:{left:e,right:e+n,top:t+i,bottom:t}};return this.blocks.push(l),this.addBlockToGrid(l),l}getBlocksNearX(e,t=3){const n=new Set,i=this.getGridKey(e-t),r=this.getGridKey(e+t);for(let o=i;o<=r;o++)if(this.blockGrid[o])for(const a of this.blockGrid[o])n.add(a);return Array.from(n)}isPointInsideAnyBlock(e,t){for(const n of this.blocks)if(e>=n.bounds.left&&e<=n.bounds.right&&t>=n.bounds.bottom&&t<=n.bounds.top)return!0;return!1}findGroundYAtPosition(e,t){let n=null,i=1/0;const r=this.getBlocksNearX(e);for(const o of r)if(e>=o.bounds.left&&e<=o.bounds.right&&o.bounds.top<=t){const a=t-o.bounds.top;a<i&&(i=a,n=o.bounds.top)}return n}checkHorizontalCollision(e){const t=e.left+(e.right-e.left)/2,i=this.getBlocksNearX(t,5).filter(r=>e.right>=r.bounds.left&&r.bounds.left>=e.left);i.sort((r,o)=>r.bounds.left-o.bounds.left);for(const r of i)if(e.top>r.bounds.bottom&&e.bottom<r.bounds.top)return{collision:!0,blockX:r.bounds.left};return{collision:!1}}checkVerticalCollision(e,t=null){const n=this.getBlocksNearX(e.left+(e.right-e.left)/2);for(const i of n)if(e.right>i.bounds.left+.05&&e.left<i.bounds.right-.05){if(e.top>=i.bounds.bottom&&e.top<i.bounds.top&&e.top>i.bounds.bottom+.01&&(t===null||t>0))return{collision:!0,direction:"up",blockY:i.bounds.bottom};if(e.bottom<=i.bounds.top&&e.bottom>i.bounds.bottom)return{collision:!0,direction:"down",blockY:i.bounds.top}}return{collision:!1}}checkBlockCollision(e){const t=this.getBlocksNearX(e.left+(e.right-e.left)/2);for(const n of t)if(e.right>n.bounds.left&&e.left<n.bounds.right&&e.top>n.bounds.bottom&&e.bottom<n.bounds.top){const i=e.right-n.bounds.left,r=n.bounds.right-e.left,o=n.bounds.top-e.bottom,a=e.top-n.bounds.bottom,l=Math.min(i,r,o,a);let c,h=0,u=0;return l===i?(c="right",h=n.bounds.left):l===r?(c="left",h=n.bounds.right):l===o?(c="up",u=n.bounds.top):(c="down",u=n.bounds.bottom),{collision:!0,direction:c,blockX:h,blockY:u}}return{collision:!1}}removeBlock(e){const t=this.blocks.indexOf(e);t!==-1&&(this.removeBlockFromGrid(e),this.scene.remove(e.mesh),this.blocks.splice(t,1))}removeBlocksBeforeX(e){const t=[];this.blocks.forEach(n=>{n.bounds.right<e&&t.push(n)}),t.forEach(n=>{this.removeBlockFromGrid(n),this.scene.remove(n.mesh);const i=this.blocks.indexOf(n);i!==-1&&this.blocks.splice(i,1)})}reset(){for(const e of this.blocks)this.scene.remove(e.mesh);this.blocks=[],this.blockGrid={}}}class ap{constructor(e,t){this.scene=e,this.blockManager=t,this.lasers=[],this.onDuration=30,this.offDuration=30,this.totalCycleDuration=this.onDuration+this.offDuration,this.globalPhase=0}reset(){this.lasers.forEach(e=>{this.scene.remove(e.beam),this.scene.remove(e.glow),e.sparks&&e.sparks.length>0&&e.sparks.forEach(t=>{this.scene.remove(t.mesh)}),e.marker&&this.scene.remove(e.marker)}),this.lasers=[],this.globalPhase=0}createLaser(e,t,n=!1){const r=e+.25,o=t+.5/2,a=.1,l=.5,c=new gt(a,l),h=new Wt({color:16711680,emissive:16711680,emissiveIntensity:1.5,transparent:!0,opacity:.9,side:ht}),u=new Ke(c,h);u.position.set(r,o,.02),u.castShadow=!1,u.visible=!0,this.scene.add(u);const p=.3,m=new Tn;m.position.set(r,o,.01),m.visible=!0;const B=.15,g=new gt(B,l),f=new Wt({color:16724787,emissive:16724787,emissiveIntensity:1,transparent:!0,opacity:.6,side:ht}),d=new Ke(g,f);m.add(d);const y=new gt(p,l),v=new Wt({color:16742263,emissive:16742263,emissiveIntensity:.4,transparent:!0,opacity:.2,side:ht}),b=new Ke(y,v);m.add(b),this.scene.add(m);const R={left:r-a/2,right:r+a/2,top:o+l/2,bottom:o-l/2};let w=[],T=t;if(n){const E=this.blockManager.getBlocksNearX(r,2);T=-5;let H=!1;for(const G of E)r>=G.bounds.left&&r<=G.bounds.right&&G.bounds.top>T&&(T=G.bounds.top,H=!0);if(!H)for(const G of this.blockManager.blocks)r>=G.bounds.left&&r<=G.bounds.right&&G.bounds.top>T&&(T=G.bounds.top,H=!0);H||(T=-4)}const V={beam:u,glow:m,sparks:w,bounds:R,x:r,y:o,sparkY:T,hasSparks:n,active:!0,isActive:!0,sparkSpawnTimer:0,sparkSpawnRate:.6},M=this.globalPhase<this.onDuration;return V.beam.visible=M,V.glow.visible=M,V.isActive=M,this.lasers.push(V),V}createSparkMesh(e,t,n){const i=new gt(n,n),r=new Wt({color:16711680,emissive:16711680,emissiveIntensity:2,transparent:!0,opacity:1,side:ht}),o=new Ke(i,r),a=(Math.random()-.5)*.05,l=Math.random()*.05;o.position.set(e+a,t+l,.2),this.scene.add(o);const c=Math.random()*Math.PI*2,h=Math.random()*.02+.01,u=Math.random()*.5+.3;return{mesh:o,size:n,originalSize:n,velocity:{x:Math.cos(c)*h,y:Math.sin(c)*h},lifetime:u,maxLifetime:u}}update(e){for(this.globalPhase+=e;this.globalPhase>=this.totalCycleDuration;)this.globalPhase-=this.totalCycleDuration;const t=this.globalPhase<this.onDuration;for(const n of this.lasers)if(n.active){if(t){if(n.beam.visible||(n.beam.visible=!0,n.glow.visible=!0,n.isActive=!0),n.hasSparks){const i=Math.floor(n.sparkSpawnRate*e*3);for(let r=0;r<i;r++)if(Math.random()<.7){const o=Math.random()*.08+.03,a=this.createSparkMesh(n.x,n.sparkY,o);n.sparks.push(a)}}}else n.beam.visible&&(n.beam.visible=!1,n.glow.visible=!1,n.isActive=!1);n.hasSparks&&n.sparks.length>0&&this.updateSparks(n,e)}}updateSparks(e,t){for(let n=e.sparks.length-1;n>=0;n--){const i=e.sparks[n];i.mesh.position.x+=i.velocity.x*t,i.mesh.position.y+=i.velocity.y*t,i.lifetime-=t/60;const r=i.lifetime/i.maxLifetime;i.mesh.scale.set(r,r,1),i.lifetime<=0&&(this.scene.remove(i.mesh),e.sparks.splice(n,1))}}getLaserBounds(){return this.lasers.filter(e=>e.isActive).map(e=>e.bounds)}checkCollision(e){for(const t of this.lasers)if(t.isActive&&e.left<t.bounds.right&&e.right>t.bounds.left&&e.top>t.bounds.bottom&&e.bottom<t.bounds.top)return!0;return!1}}const op={vibeverse_portal:{layout:`
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
`,metadata:{startsHigh:!0,endsHigh:!0}}},lp={spikes2:{layout:`
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
`,metadata:{startsHigh:!0,endsHigh:!0}}},cp={spikes3:{layout:`
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
`,metadata:{startsHigh:!0,endsHigh:!0}}};class hp{constructor(){this.playerDistance=0,this.difficultyThresholds={level1:0,level2:100,level3:300},this.difficultyWeights={level1:1,level2:0,level3:0},this.maxDifficultyWeights={level1:1,level2:1,level3:1},this.phaseOutThresholds={level1:300,level2:600}}updateDifficulty(e){if(this.playerDistance=e,e>=this.phaseOutThresholds.level1)this.difficultyWeights.level1=0;else if(e>=this.difficultyThresholds.level2){const t=(e-this.difficultyThresholds.level2)/(this.phaseOutThresholds.level1-this.difficultyThresholds.level2);this.difficultyWeights.level1=Math.max(0,1-t)}else this.difficultyWeights.level1=this.maxDifficultyWeights.level1;if(e>=this.phaseOutThresholds.level2)this.difficultyWeights.level2=0;else if(e>=this.difficultyThresholds.level3){const t=(e-this.difficultyThresholds.level3)/(this.phaseOutThresholds.level2-this.difficultyThresholds.level3);this.difficultyWeights.level2=Math.max(0,1-t)}else if(e>=this.difficultyThresholds.level2){const t=(e-this.difficultyThresholds.level2)/(this.difficultyThresholds.level3-this.difficultyThresholds.level2);this.difficultyWeights.level2=Math.min(this.maxDifficultyWeights.level2,t)}else this.difficultyWeights.level2=0;if(e>=this.difficultyThresholds.level3){const t=(e-this.difficultyThresholds.level3)/(this.phaseOutThresholds.level2-this.difficultyThresholds.level3);this.difficultyWeights.level3=Math.min(this.maxDifficultyWeights.level3,t)}else this.difficultyWeights.level3=0}selectDifficulty(){const e=this.difficultyWeights.level1+this.difficultyWeights.level2+this.difficultyWeights.level3;if(e<=0)return"level3";const t=Math.random()*e;let n=0;return n+=this.difficultyWeights.level1,t<n?"level1":(n+=this.difficultyWeights.level2,t<n?"level2":"level3")}getDifficultyWeights(){return{...this.difficultyWeights}}reset(){this.playerDistance=0,this.difficultyWeights={level1:1,level2:0,level3:0}}}class up{constructor(e,t,n,i,r,o){this.scene=e,this.blockManager=t,this.obstacleManager=n,this.laserManager=i,this.portalManager=r,this.debugManager=o,this.sceneWidth=30,this.sceneHeight=20,this.gridCellSize=.5,this.currentSceneX=0,this.generatedScenes=[],this.hasUsedVibePortal=!1,this.baseGroundY=-5,this.difficultyManager=new hp,this.templates=this.loadTemplates(),this.categorizeTemplates(),this.playerDistance=0,this.debugManager&&this.debugManager.populateTemplateDropdown(this.templates)}loadTemplates(){const e={};for(const[t,n]of Object.entries(op))e[t]={grid:this.parseTemplate(n.layout),metadata:{...n.metadata,difficulty:"level1"}};for(const[t,n]of Object.entries(lp))e[t]={grid:this.parseTemplate(n.layout),metadata:{...n.metadata,difficulty:"level2"}};for(const[t,n]of Object.entries(cp))e[t]={grid:this.parseTemplate(n.layout),metadata:{...n.metadata,difficulty:"level3"}};return e}categorizeTemplates(){this.highStartTemplates={level1:[],level2:[],level3:[]},this.lowStartTemplates={level1:[],level2:[],level3:[]},this.templateCounts={lowToLow:{level1:0,level2:0,level3:0},lowToHigh:{level1:0,level2:0,level3:0},highToLow:{level1:0,level2:0,level3:0},highToHigh:{level1:0,level2:0,level3:0},total:{level1:0,level2:0,level3:0}};for(const[e,t]of Object.entries(this.templates)){const n=t.metadata.startsHigh,i=t.metadata.endsHigh,r=t.metadata.difficulty||"level1";n&&i?this.templateCounts.highToHigh[r]++:n&&!i?this.templateCounts.highToLow[r]++:!n&&i?this.templateCounts.lowToHigh[r]++:this.templateCounts.lowToLow[r]++,this.templateCounts.total[r]++,n?this.highStartTemplates[r].push(e):this.lowStartTemplates[r].push(e)}console.log("High start templates:",this.highStartTemplates),console.log("Low start templates:",this.lowStartTemplates),console.log("Template counts:",this.templateCounts)}parseTemplate(e){return e.trim().split(`
`).map(t=>t.split(""))}selectNextTemplate(e){if(!e)return"flat_ground";if(this.debugManager){const o=this.debugManager.getForceTemplate();if(o&&this.templates[o])return o==="vibeverse_portal"&&(this.hasUsedVibePortal=!0),o}this.difficultyManager.updateDifficulty(this.playerDistance);const t=this.difficultyManager.selectDifficulty();this.debugManager&&this.debugManager.updateDifficultyWeights(this.difficultyManager.getDifficultyWeights());const n=this.templates[e].metadata.endsHigh;let i,r;if(n?this.highStartTemplates[t]&&this.highStartTemplates[t].length>0?r=this.highStartTemplates[t]:this.lowStartTemplates[t]&&this.lowStartTemplates[t].length>0?r=this.lowStartTemplates[t]:t!=="level2"&&this.highStartTemplates.level2.length>0?r=this.highStartTemplates.level2:t!=="level1"&&this.highStartTemplates.level1.length>0?r=this.highStartTemplates.level1:t!=="level3"&&this.highStartTemplates.level3.length>0?r=this.highStartTemplates.level3:r=[...this.lowStartTemplates.level1,...this.lowStartTemplates.level2,...this.lowStartTemplates.level3].filter(o=>o):this.lowStartTemplates[t]&&this.lowStartTemplates[t].length>0?r=this.lowStartTemplates[t]:t!=="level2"&&this.lowStartTemplates.level2.length>0?r=this.lowStartTemplates.level2:t!=="level1"&&this.lowStartTemplates.level1.length>0?r=this.lowStartTemplates.level1:t!=="level3"&&this.lowStartTemplates.level3.length>0?r=this.lowStartTemplates.level3:r=Object.keys(this.templates),r&&r.length>0)return i=r[Math.floor(Math.random()*r.length)],i==="flat_ground"||i==="vibeverse_portal"&&this.hasUsedVibePortal?this.selectNextTemplate(e):(i==="vibeverse_portal"&&(this.hasUsedVibePortal=!0),i);{const o=Object.keys(this.templates).filter(a=>a!=="flat_ground");if(o.length>0)return i=o[Math.floor(Math.random()*o.length)],i==="vibeverse_portal"&&this.hasUsedVibePortal?this.selectNextTemplate(e):(i==="vibeverse_portal"&&(this.hasUsedVibePortal=!0),i);{console.warn("No valid templates found - should never happen");const a=Object.keys(this.templates).filter(l=>l!=="flat_ground");return a[Math.floor(Math.random()*a.length)]}}}generateScene(e,t=null){var c;let n;if(t)n=t;else{const h=this.generatedScenes.length-1,u=h>=0?this.generatedScenes[h].template:null;n=this.selectNextTemplate(u)}const i=this.templates[n].grid;console.log(`Generating scene '${n}' at x=${e}`);const r=e,o=e+this.sceneWidth*this.gridCellSize,a={blocks:[],obstacles:[],lasers:[],portals:[]};for(let h=0;h<this.sceneHeight;h++)for(let u=0;u<this.sceneWidth;u++){const p=((c=i[this.sceneHeight-1-h])==null?void 0:c[u])||".",m=r+u*this.gridCellSize,B=this.baseGroundY+h*this.gridCellSize;if(p==="B")if(h===0){const f=this.gridCellSize*3,d=B-this.gridCellSize*2,y=this.blockManager.createBlock(m,d,this.gridCellSize,f);a.blocks.push(y)}else{const f=this.blockManager.createBlock(m,B,this.gridCellSize,this.gridCellSize);a.blocks.push(f)}else if(p==="S"){const g=this.obstacleManager.createSpike(m,B);a.obstacles.push(g)}else if(p==="L"){let g=!1;const f=this.sceneHeight-1-h;(f+1<this.sceneHeight?i[f+1][u]:null)==="B"&&(g=!0);const y=f===0,v=this.laserManager.createLaser(m,B,g);if(y&&v.beam){const b=v.beam.geometry.parameters.height,R=30,w=new gt(v.beam.geometry.parameters.width,R);v.beam.geometry.dispose(),v.beam.geometry=w,v.beam.position.y+=(R-b)/2,v.glow&&v.glow.children.length>0&&(v.glow.children.forEach(T=>{const V=new gt(T.geometry.parameters.width,R);T.geometry.dispose(),T.geometry=V}),v.glow.position.y+=(R-b)/2)}a.lasers.push(v)}else if(p==="P"&&this.portalManager){const g=this.portalManager.checkIfComingFromPortal(),f=e>=this.sceneWidth*this.gridCellSize*1-1&&e<=this.sceneWidth*this.gridCellSize*1+1,y=g&&f&&n==="vibeverse_portal";console.log(`Creating portal: isEntry=${y}, template=${n}, scene pos=${e}, isFromPortal=${g}`);const v=this.portalManager.createPortal(m,B,y);a.portals.push(v)}}const l=[];if(this.debugManager){const h=this.debugManager.createMarker(r,this.baseGroundY),u=this.debugManager.createMarker(r,this.baseGroundY+this.sceneHeight*this.gridCellSize);h&&u&&l.push(h,u)}return this.generatedScenes.push({startX:r,endX:o,entities:a,template:n,markers:l,metadata:this.templates[n].metadata}),a}update(e){const t=this.generatedScenes[this.generatedScenes.length-1];if(!t||e+30>t.endX){const n=t?t.endX:0;this.generateScene(n)}if(this.debugManager&&this.debugManager.updateTemplateInfo(this.generatedScenes,e),this.generatedScenes.length>3){let n=[];for(let i=0;i<this.generatedScenes.length-3;i++){const r=this.generatedScenes[i];r.endX<e-30&&(n.push(i),this.debugManager&&r.markers&&r.markers.length>0&&this.debugManager.removeMarkers(r.markers))}for(let i=n.length-1;i>=0;i--)this.generatedScenes.splice(n[i],1);this.blockManager.removeBlocksBeforeX(e-30)}}reset(){this.currentSceneX=0,this.generatedScenes=[],this.hasUsedVibePortal=!1,this.debugManager&&this.debugManager.initialPlayerPosition>0?(this.playerDistance=this.debugManager.initialPlayerPosition,this.currentSceneX=this.playerDistance):this.playerDistance=0,this.difficultyManager.reset(),this.playerDistance>0&&this.difficultyManager.updateDifficulty(this.playerDistance),this.debugManager&&this.generatedScenes.forEach(n=>{n.markers&&n.markers.length>0&&this.debugManager.removeMarkers(n.markers)});const e=this.playerDistance>0?this.playerDistance-15:-15;this.generateScene(e,"flat_ground"),this.generateScene(e+this.sceneWidth*this.gridCellSize,"flat_ground"),this.portalManager&&this.portalManager.checkIfComingFromPortal()?(console.log("Generating entry portal in third scene for returning to source game"),this.generateScene(e+this.sceneWidth*this.gridCellSize*2,"vibeverse_portal")):this.generateScene(e+this.sceneWidth*this.gridCellSize*2)}updatePlayerDistance(e){this.playerDistance=e}getSceneNameAtPosition(e){const t=this.generatedScenes.find(n=>e>=n.startX&&e<n.endX);return t?t.template:"unknown"}}class dp{constructor(e,t){this.scene=e,this.blockManager=t,this.portals=[],this.particleSystems=[],this.portalLabels=[],this.active=!0,this.isEnteringPortal=!1,this.game=null,this.transitionCountdown=3,this.transitionInterval=null,this.disabledPortalX=null,this.PORTAL_WIDTH=.5,this.PORTAL_HEIGHT=1,this.PORTAL_DEPTH=.05,this.EXIT_PORTAL_COLOR=65280,this.EXIT_PORTAL_EMISSIVE=65280,this.ENTRY_PORTAL_COLOR=16711680,this.ENTRY_PORTAL_EMISSIVE=16711680,this.PORTAL_OPACITY=.8,this.portalDestination="https://portal.pieter.com",this.createPortalLabelTextures(),this.createPortalTransitionDialogue(),this.handleEscapeKey=this.handleEscapeKey.bind(this),this.handleStayButton=this.handleStayButton.bind(this),document.addEventListener("keydown",this.handleEscapeKey)}createPortalLabelTextures(){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=3072,e.height=512,t.fillStyle="#00ff00",t.font="bold 200px Arial",t.textAlign="center",t.fillText("VIBEVERSE PORTAL →",e.width/2,e.height/2),this.exitPortalLabelTexture=new za(e);const n=document.createElement("canvas"),i=n.getContext("2d");n.width=3072,n.height=512,i.fillStyle="#ff0000",i.font="bold 200px Arial",i.textAlign="center",i.fillText("← BACK TO PREVIOUS GAME",n.width/2,n.height/2),this.entryPortalLabelTexture=new za(n)}createPortal(e,t,n=!1){const i=new Tn;i.position.set(e,t,0);const r=n?this.ENTRY_PORTAL_COLOR:this.EXIT_PORTAL_COLOR,o=n?this.ENTRY_PORTAL_EMISSIVE:this.EXIT_PORTAL_EMISSIVE,a=n?this.entryPortalLabelTexture:this.exitPortalLabelTexture,l=new ur(.5,.12,16,32),c=new Wt({color:r,emissive:o,transparent:!0,opacity:this.PORTAL_OPACITY}),h=new Ke(l,c);h.rotation.x=Math.PI*.15,h.rotation.y=0,h.rotation.z=0,i.add(h);const u=new cr(.38,32),p=new fn({color:r,transparent:!0,opacity:.5,side:ht}),m=new Ke(u,p);m.rotation.x=Math.PI*.15,m.rotation.y=0,m.rotation.z=0,i.add(m);const B=new gt(6,1.2),g=new fn({map:a,transparent:!0,side:ht}),f=new Ke(B,g);f.position.y=1.5,i.add(f),this.portalLabels.push(f),this.createPortalParticles(i,e,t,n),this.scene.add(i),i.children[0];const d=.5,y=.12,v=new P(e,t,0);return this.portals.push({group:i,position:v,portalRadius:d,portalThickness:y,isEntry:n}),i}createPortalParticles(e,t,n,i=!1){const o=new Lt,a=new Float32Array(90*3),l=new Float32Array(90*3),c=Math.PI*.15,h=Math.cos(c),u=Math.sin(c);for(let B=0;B<90*3;B+=3){const g=Math.random()*Math.PI*2,f=.5+(Math.random()-.5)*.18,d=Math.cos(g)*f,y=Math.sin(g)*f,v=y*h,b=y*u;a[B]=d,a[B+1]=v,a[B+2]=b+(Math.random()-.5)*.07,i?(l[B]=.8+Math.random()*.2,l[B+1]=0,l[B+2]=0):(l[B]=0,l[B+1]=.8+Math.random()*.2,l[B+2]=0)}o.setAttribute("position",new Ct(a,3)),o.setAttribute("color",new Ct(l,3));const p=new Eo({size:.2,vertexColors:!0,transparent:!0,opacity:.85}),m=new zf(o,p);e.add(m),this.particleSystems.push({system:m,geometry:o,isEntry:i})}update(e){if(!(!this.active||this.isEnteringPortal))try{this.animateParticles();for(let t=0;t<this.portals.length;t++){const n=this.portals[t];if(this.disabledPortalX!==null&&e.x<this.disabledPortalX)continue;const i=e instanceof P?e:new P(e.x,e.y,e.z),r=i.distanceTo(n.position);if(r<2){const g=Math.max(.8,1.5-r/2);n.group.children[0].material.emissiveIntensity=g}const o=.2,a=n.portalRadius+n.portalThickness,l=n.portalRadius-n.portalThickness,c=i.x-n.position.x,h=i.y-n.position.y,u=Math.sqrt(c*c+h*h),p=u<a+o,m=u>l-o;if(p&&m){console.log(`Portal collision detected! Distance: ${r.toFixed(2)}, isEntry: ${n.isEntry}`),console.log(`Player position: x=${i.x.toFixed(2)}, y=${i.y.toFixed(2)}`),console.log(`Portal position: x=${n.position.x.toFixed(2)}, y=${n.position.y.toFixed(2)}`),this.startPortalTransition(n);break}}}catch(t){console.error("Error in PortalManager update:",t)}}animateParticles(){const e=Math.PI*.15,t=Math.cos(e),n=Math.sin(e),i=Date.now()*.001;for(let r=0;r<this.particleSystems.length;r++){const o=this.particleSystems[r],a=o.geometry.attributes.position.array;for(let l=0;l<a.length;l+=3){const c=Math.atan2(a[l+1]/t,a[l]),u=Math.sqrt(Math.pow(a[l],2)+Math.pow(a[l+1]/t,2))+.02*Math.sin(i*3+c*4),p=Math.cos(c)*u,m=Math.sin(c)*u,B=m*t,g=m*n;a[l]=p,a[l+1]=B,a[l+2]=g+.02*Math.sin(i*2+l)}o.geometry.attributes.position.needsUpdate=!0}}createPortalTransitionDialogue(){const e=document.getElementById("portal-transition");if(e)return e;const t=document.createElement("div");t.id="portal-transition",t.className="dialog-purple",t.innerHTML=`
      <div id="portal-transition-title" class="dialog-title">Entering the Vibeverse</div>
      <div id="portal-transition-message" class="dialog-content">Leaving Super Block Boy Marathon in</div>
      <div id="portal-transition-countdown">3</div>
      <button id="portal-stay-button" class="btn btn-primary">Stay Here</button>
      <div class="portal-stay-hint">Press ESC to stay here</div>
    `,document.body.appendChild(t);const n=document.getElementById("portal-stay-button");return n&&n.addEventListener("click",this.handleStayButton.bind(this)),t}handleEscapeKey(e){e.key==="Escape"&&this.isEnteringPortal&&(e.preventDefault(),this.cancelPortalTransition())}handleStayButton(e){e&&e.preventDefault(),this.cancelPortalTransition()}cancelPortalTransition(){this.transitionInterval&&(clearInterval(this.transitionInterval),this.transitionInterval=null);const e=document.getElementById("portal-transition");e&&e.classList.remove("visible"),this.isEnteringPortal=!1,this.transitionCountdown=3,this.game&&(this.game.portalTransitionActive=!1,this.game.player&&(this.game.player.isFreezingForPortal=!1)),this.active=!0}startPortalTransition(e){this.isEnteringPortal=!0,this.disabledPortalX=e.position.x+1,this.freezeGame();const t=this.createPortalTransitionDialogue();this.transitionCountdown=3;const n=document.getElementById("portal-transition-countdown");n&&(n.textContent=this.transitionCountdown.toString()),t.classList.add("visible"),this.transitionInterval=setInterval(()=>{this.transitionCountdown--,n.textContent=this.transitionCountdown.toString(),this.transitionCountdown<=0&&(clearInterval(this.transitionInterval),this.transitionInterval=null,this.enterPortal(e.isEntry))},1e3)}enterPortal(e=!1){const t="https://omiigames.com/game/";if(console.log(`Entering ${e?"entry (return)":"exit (next game)"} portal`),e){const a=this.getReturnPortalUrl();if(a){console.log(`Returning to source game: ${a}`);const l=new URLSearchParams(window.location.search),c=new URLSearchParams;for(const[m,B]of l.entries())m!=="ref"&&c.append(m,B);c.has("portal")||c.append("portal","true");let h=a;!h.startsWith("http://")&&!h.startsWith("https://")&&(h="https://"+h);const u=c.toString(),p=h+(u?"?"+u:"");console.log(`Redirecting to: ${p}`),window.location.href=p;return}else console.warn("Entry portal activated but no return URL found")}let n=this.portalDestination;const i=new URLSearchParams;i.append("portal","true"),i.append("color","green"),i.append("ref",t);const r=new URLSearchParams(window.location.search);if(r.has("portal"))for(const[a,l]of r.entries())!i.has(a)&&a!=="ref"&&i.append(a,l);const o=`${n}?${i.toString()}`;console.log(`Redirecting to portal hub: ${o}`),window.location.href=o}checkIfComingFromPortal(){const e=new URLSearchParams(window.location.search),t=e.has("portal"),n=e.has("ref")&&e.get("ref").trim()!=="",i=t&&n;return t&&!n&&console.warn("Portal parameter is present but no valid ref URL is provided"),i&&console.log(`Player is coming from a portal: ${e.get("ref")}`),i}getPortalEntryPoint(){return this.portals.length>0?this.portals[0].position:null}getReturnPortalUrl(){return new URLSearchParams(window.location.search).get("ref")}cleanup(){for(const t of this.portals)this.scene.remove(t.group);this.portals=[],this.particleSystems=[],this.portalLabels=[],this.active=!0,this.isEnteringPortal=!1,this.disabledPortalX=null,this.game&&(this.game.portalTransitionActive=!1),this.transitionInterval&&(clearInterval(this.transitionInterval),this.transitionInterval=null);const e=document.getElementById("portal-transition");e&&e.remove(),this.transitionCountdown=3,this.createPortalLabelTextures()}setGame(e){this.game=e}freezeGame(){this.active=!1,this.isEnteringPortal=!0,this.game&&(console.log("Freezing game for portal transition"),this.game.portalTransitionActive=!0,this.game.player&&(this.game.player.isFreezingForPortal=!0))}}class fp{constructor(e,t){this.scene=e,this.camera=t,this.isVisible=!0,this.steamURL="https://store.steampowered.com/app/3276900/Super_Block_Boy_and_Friends/",this.worldPositionX=5.5,this.textureLoader=new bo,this.width=8,this.height=8,this.createBanner(),this.mouse=new ke,this.isHovering=!1,this.container=document.getElementById("game-container"),this.mouseMoveHandler=null,this.ensureMouseMoveHandler()}createBanner(){const e=this.textureLoader.load("sbb-sale-banner.png",i=>{i.minFilter=Et,i.magFilter=Et,i.colorSpace=nt,i.anisotropy=16,this.mesh&&this.mesh.material&&(this.mesh.material.needsUpdate=!0)});e.colorSpace=nt;const t=new fn({map:e,transparent:!0,side:ht,color:16777215,alphaTest:.1}),n=new gt(this.width,this.height);this.mesh=new Ke(n,t),this.mesh.position.set(this.worldPositionX,0,-.45),this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.scene.add(this.mesh)}update(e,t){if(!this.isVisible||!this.mesh)return;const n=this.mesh.position.x+this.width/2,i=this.mesh.position.x-this.width/2,r=t.x+this.camera.right,o=t.x+this.camera.left;n<o||i>r?this.removeMouseMoveHandler():this.ensureMouseMoveHandler()}ensureMouseMoveHandler(){this.mouseMoveHandler||(this.mouseMoveHandler=e=>{const t=this.container.getBoundingClientRect();this.mouse.x=e.clientX/t.width*2-1,this.mouse.y=-(e.clientY/t.height)*2+1;const n=this.isPointInBanner(this.mouse,this.camera);n!==this.isHovering&&(this.isHovering=n,this.container.style.cursor=n?"pointer":"default")},this.container.addEventListener("mousemove",this.mouseMoveHandler))}removeMouseMoveHandler(){this.mouseMoveHandler&&(this.container.removeEventListener("mousemove",this.mouseMoveHandler),this.mouseMoveHandler=null,this.isHovering=!1,this.container.style.cursor="default")}handleInteraction(e,t,n=null){return!this.isVisible||!this.mesh?!1:this.isPointInBanner(e,t)?(this.openSteamStore(),n&&n.trackEvent("banner_click","steam_store"),!0):!1}isPointInBanner(e,t){if(!this.isVisible||!this.mesh)return!1;const n=new np;return n.setFromCamera(e,t),new Pn().setFromObject(this.mesh).expandByScalar(.2),n.intersectObject(this.mesh).length>0}openSteamStore(){window.location.href=this.steamURL}show(){this.mesh&&(this.mesh.visible=!0,this.isVisible=!0,this.ensureMouseMoveHandler())}hide(){this.mesh&&(this.mesh.visible=!1,this.isVisible=!1,this.removeMouseMoveHandler())}cleanup(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh.material.map&&this.mesh.material.map.dispose()),this.removeMouseMoveHandler()}}class pp{constructor(){this.collisionBuffer=0}checkCollision(e,t){return e.left<t.right&&e.right>t.left&&e.top>t.bottom&&e.bottom<t.top}checkCollisionWithMeshes(e,t){const n=e.getBounds(),i={left:n.left-this.collisionBuffer,right:n.right+this.collisionBuffer,top:n.top,bottom:n.bottom};for(const r of t){let o;if(r.userData&&r.userData.bounds){if(o=r.userData.bounds,r.userData.isSpike){if(this.checkTriangleCollision(i,o))return!0;continue}}else o={left:r.position.x-r.scale.x/2,right:r.position.x+r.scale.x/2,top:r.position.y+r.scale.y/2,bottom:r.position.y-r.scale.y/2};if(this.checkCollision(i,o))return!0}return!1}checkTriangleCollision(e,t){if(e.left>=t.right||e.right<=t.left||e.top<=t.bottom||e.bottom>=t.top)return!1;const n=t.right-t.left,i=t.top-t.bottom,r=t.bottom,o=.9,a=n*(1-o)/2,l=t.left+a,c=t.right-a;if(e.right<=l||e.left>=c)return!1;let h;e.right<(l+c)/2?h=e.right:h=e.left;const u=(h-l)/(c-l),p=i*o*(1-2*Math.abs(u-.5)),m=r+p;return e.bottom<m}checkFallDeath(e){return e.position.y<e.fallDeathLevel}}class mp{constructor(e){this.scene=e,this.debugMarkers=[],this.infoElements={},this.enabled=this.isDebugEnabled(),this.selectedTemplate=this.getSelectedTemplate(),this.initialPlayerPosition=this.getInitialPlayerPosition(),this.difficultyWeights={level1:0,level2:0,level3:0},this.currentFps=0,this.handleKeyDown=this.handleKeyDown.bind(this),this.debugContainer=document.createElement("div"),this.debugContainer.id="debug-container",this.debugContainer.style.position="absolute",this.debugContainer.style.top="10px",this.debugContainer.style.right="10px",this.debugContainer.style.display=this.enabled?"flex":"none",this.debugContainer.style.flexDirection="column",this.debugContainer.style.gap="10px",this.debugContainer.style.zIndex="1000",document.body.appendChild(this.debugContainer),this.createDebugPanel("performance","Performance"),this.createDebugPanel("coordinates","Player Coordinates"),this.createDebugPanel("templateInfo","Template Information"),this.createTemplateSelector(),this.templateCounts={lowToLow:0,lowToHigh:0,highToLow:0,highToHigh:0,total:0},this.setupKeyboardListener(),console.log(`Debug mode initially ${this.enabled?"enabled":"disabled"} (toggle with 'p' key)`)}isDebugEnabled(){return localStorage.getItem("debug")==="true"}getSelectedTemplate(){return this.isDebugEnabled()&&localStorage.getItem("selectedTemplate")||"none"}getInitialPlayerPosition(){if(this.isDebugEnabled()){const e=localStorage.getItem("initialPlayerPosition");return e?parseFloat(e):0}return 0}createTemplateSelector(){const e=document.createElement("div");e.style.backgroundColor="rgba(0, 0, 0, 0.7)",e.style.color="white",e.style.padding="10px",e.style.borderRadius="5px",e.style.fontFamily="monospace",e.style.fontSize="14px",e.style.minWidth="300px";const t=document.createElement("div");t.textContent="Level Template Selector",t.style.fontWeight="bold",t.style.marginBottom="5px",t.style.borderBottom="1px solid #666",e.appendChild(t);const n=document.createElement("div");n.style.display="flex",n.style.alignItems="center",n.style.gap="10px",n.style.marginTop="5px";const i=document.createElement("label");i.textContent="Force template:",i.style.marginRight="5px",n.appendChild(i),this.templateSelect=document.createElement("select"),this.templateSelect.style.backgroundColor="#333",this.templateSelect.style.color="white",this.templateSelect.style.border="1px solid #666",this.templateSelect.style.padding="5px",this.templateSelect.style.borderRadius="3px",this.templateSelect.style.fontFamily="monospace";const r=document.createElement("option");r.value="none",r.textContent="None (Random)",this.templateSelect.appendChild(r),this.templateSelect.value=this.selectedTemplate,this.templateSelect.addEventListener("change",l=>{this.selectedTemplate=l.target.value,localStorage.setItem("selectedTemplate",this.selectedTemplate),console.log(`Template selection set to: ${this.selectedTemplate}`)}),n.appendChild(this.templateSelect),e.appendChild(n);const o=document.createElement("div");o.style.display="flex",o.style.alignItems="center",o.style.gap="10px",o.style.marginTop="10px";const a=document.createElement("label");a.textContent="Initial distance:",a.style.marginRight="5px",o.appendChild(a),this.positionInput=document.createElement("input"),this.positionInput.type="number",this.positionInput.value=this.initialPlayerPosition,this.positionInput.style.backgroundColor="#333",this.positionInput.style.color="white",this.positionInput.style.border="1px solid #666",this.positionInput.style.padding="5px",this.positionInput.style.borderRadius="3px",this.positionInput.style.fontFamily="monospace",this.positionInput.style.width="70px",this.positionInput.min="0",this.positionInput.step="100",this.positionInput.addEventListener("change",l=>{const c=parseFloat(l.target.value);this.initialPlayerPosition=isNaN(c)?0:c,localStorage.setItem("initialPlayerPosition",this.initialPlayerPosition),console.log(`Initial player distance set to: ${this.initialPlayerPosition}`)}),o.appendChild(this.positionInput),e.appendChild(o),this.debugContainer.appendChild(e),this.templateSelectorPanel=e}populateTemplateDropdown(e){if(this.templateSelect){for(;this.templateSelect.options.length>1;)this.templateSelect.remove(1);for(const t of Object.keys(e)){const n=document.createElement("option");n.value=t,n.textContent=t,this.templateSelect.appendChild(n)}this.templateSelect.value=this.selectedTemplate}}getForceTemplate(){return this.enabled&&this.selectedTemplate!=="none"?this.selectedTemplate:null}handleKeyDown(e){e.key==="p"&&this.toggleDebug()}setupKeyboardListener(){document.addEventListener("keydown",this.handleKeyDown)}createDebugPanel(e,t){const n=document.createElement("div");n.style.backgroundColor="rgba(0, 0, 0, 0.7)",n.style.color="white",n.style.padding="10px",n.style.borderRadius="5px",n.style.fontFamily="monospace",n.style.fontSize="14px",n.style.minWidth="300px";const i=document.createElement("div");i.textContent=t,i.style.fontWeight="bold",i.style.marginBottom="5px",i.style.borderBottom="1px solid #666",n.appendChild(i);const r=document.createElement("div");return n.appendChild(r),this.debugContainer.appendChild(n),this.infoElements[e]=r,r}toggleDebug(){this.enabled=!this.enabled,localStorage.setItem("debug",this.enabled.toString()),this.debugContainer.style.display=this.enabled?"flex":"none",this.debugMarkers.forEach(e=>{e.visible=this.enabled}),this.enabled&&(this.selectedTemplate=localStorage.getItem("selectedTemplate")||"none",this.templateSelect&&(this.templateSelect.value=this.selectedTemplate),this.initialPlayerPosition=this.getInitialPlayerPosition(),this.positionInput&&(this.positionInput.value=this.initialPlayerPosition)),console.log(`Debug mode ${this.enabled?"enabled":"disabled"} (toggle with 'p' key)`)}updateCoordinates(e){if(!this.enabled)return;const t=e.position.x.toFixed(2),n=e.position.y.toFixed(2),i=e.position.z.toFixed(2),r=e.isColliding?"BLOCKED":e.isJumping?"JUMPING":e.isFalling?"FALLING":"RUNNING";this.infoElements.coordinates.innerHTML=`
      <div>Position: (${t}, ${n}, ${i})</div>
      <div>Status: ${r}</div>
      <div>Speed: ${e.speed.toFixed(3)}</div>
    `}updatePerformance(e){if(!this.enabled||!e)return;this.currentFps=e.currentFps||0;let t=`
      <div>Current FPS: <strong>${e.currentFps}</strong></div>
      <div>Average FPS: <strong>${e.averageFps}</strong></div>
    `;e.memory&&(t+=`
        <div>Memory: <strong>${e.memory.usedHeapSize}MB</strong> / ${e.memory.totalHeapSize}MB</div>
      `),this.infoElements.performance.innerHTML=t}getDifficultyWeightsHtml(e="Template Selection Weights"){const i="background-color: #ccc; border-radius: 3px;";return`
      <div style="margin-top: 10px; border-top: 1px solid #666; padding-top: 5px;">
        <div style="margin-bottom: 6px;"><strong>${e}:</strong></div>
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
    `}updateTemplateInfo(e,t){if(!this.enabled)return;this.lastGeneratedScenes=e,this.lastPlayerX=t;const n=e.find(o=>t>=o.startX&&t<o.endX);let i="";if(n){const o=n.metadata||{},a=o.startsHigh?"High":"Low",l=o.endsHigh?"High":"Low";i=`
        <div>Current Template: <strong>${n.template}</strong></div>
        <div>Height: ${a} → ${l}</div>
        <div>Scene Range: ${n.startX.toFixed(1)} to ${n.endX.toFixed(1)}</div>
      `}else i=`
        <div>Current Template: <strong>None</strong></div>
      `;const r=this.getDifficultyWeightsHtml("Template Selection Weights");this.infoElements.templateInfo.innerHTML=i+r}createMarker(e,t,n=.2,i=16711680){if(!this.enabled)return null;const r=new hr(n,16,16),o=new fn({color:i}),a=new Ke(r,o);return a.position.set(e,t,.1),this.scene.add(a),this.debugMarkers.push(a),a}clearMarkers(){this.debugMarkers.forEach(e=>{this.scene.remove(e)}),this.debugMarkers=[]}removeMarkers(e){e.forEach(t=>{if(t){this.scene.remove(t);const n=this.debugMarkers.indexOf(t);n!==-1&&this.debugMarkers.splice(n,1)}})}cleanup(){this.clearMarkers(),this.debugContainer&&this.debugContainer.parentNode&&this.debugContainer.parentNode.removeChild(this.debugContainer),document.removeEventListener("keydown",this.handleKeyDown),this.infoElements={}}getFPS(){return this.currentFps}updateDifficultyWeights(e){this.difficultyWeights=e,this.lastGeneratedScenes&&this.lastPlayerX!==void 0&&this.updateTemplateInfo(this.lastGeneratedScenes,this.lastPlayerX),this.debugElement&&this.updateDebugPanel()}updateDebugPanel(){if(this.debugElement){let e="";this.templateCounts&&(e=`
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
        `);const t=this.difficultyWeights?`
        <div class="debug-section">
          <h3>Current Difficulty</h3>
          ${this.getDifficultyWeightsHtml("Difficulty Weights")}
        </div>
      `:"";this.debugElement.innerHTML=`
        <div class="debug-panel">
          ${e}
          ${t}
          <!-- Other debug sections can be added here -->
        </div>
      `}}}class gp{constructor(e,t,n){this.scene=e,this.blockManager=t,this.obstacleManager=n,this.particles=[],this.active=!1,this.pxToUnit=.01,this.baseGravityPerFrame=.005,this.baseVelocityPerFrame=.05,this.targetFrameTime=16.67,this.cameraViewBoundaries={left:-100,right:100,top:100,bottom:-100}}updateCameraViewBoundaries(e,t){this.cameraViewBoundaries={left:e.position.x-e.right-1,right:e.position.x+e.right+1,top:e.position.y+e.top+1,bottom:e.position.y+e.bottom-1}}createParticles(e,t=100){this.clearParticles(),this.active=!0;for(let n=0;n<t;n++){const i=(Math.random()*8+2)*this.pxToUnit,r=new gt(i,i),o=new Wt({color:16711680,roughness:.1,metalness:.1,emissive:16729156,emissiveIntensity:1}),a=new Ke(r,o);a.position.set(e.x,e.y,.1),a.userData.initialPosition={x:a.position.x,y:a.position.y,z:a.position.z},a.userData.velocity={x:(Math.random()*.12-.06)*this.baseVelocityPerFrame*60*20,y:(Math.random()*.15+.02)*this.baseVelocityPerFrame*60*20,z:0},a.userData.gravityFactor=20,a.userData.settled=!1,a.userData.penetrationResistance=Math.random(),a.userData.distanceTraveled=0,a.userData.collisionSize=i*.5,a.castShadow=!0,a.receiveShadow=!1,this.scene.add(a),this.particles.push(a)}}update(e){if(!this.active)return;let t=!0;const n=e*this.targetFrameTime/1e3;this.particles.forEach(i=>{if(i.userData.settled)return;t=!1;const r={x:i.position.x,y:i.position.y,z:i.position.z},o=this.baseGravityPerFrame*60*i.userData.gravityFactor*n*3;i.userData.velocity.y-=o,i.position.x+=i.userData.velocity.x*n,i.position.y+=i.userData.velocity.y*n;const a=i.position.x-r.x,l=i.position.y-r.y,c=Math.sqrt(a*a+l*l);if(i.userData.distanceTraveled+=c,i.position.y<this.cameraViewBoundaries.bottom){this.settleParticle(i);return}const h=Math.min(i.userData.distanceTraveled/1.5,.5);if(Math.random()<h){if(this.blockManager){const p=this.blockManager.checkBlockCollision({left:i.position.x,right:i.position.x,top:i.position.y,bottom:i.position.y});if(p.collision){p.direction==="down"?i.position.y=p.blockY+i.userData.collisionSize:p.direction==="up"?i.position.y=p.blockY-i.userData.collisionSize:p.direction==="right"?i.position.x=p.blockX-i.userData.collisionSize:p.direction==="left"&&(i.position.x=p.blockX+i.userData.collisionSize),i.position.z=.1,this.settleParticle(i);return}}if(this.obstacleManager){const p=this.obstacleManager.getObstacles();for(const m of p){const B=m.userData.bounds,g=m.userData.isSpike;if(i.position.x>=B.left&&i.position.x<=B.right&&i.position.y>=B.bottom&&i.position.y<=B.top){if(g){const d=B.right-B.left,y=B.top-B.bottom,v=B.bottom,b=i.position.x,R=(b-B.left)/d,w=y*(1-2*Math.abs(R-.5)),T=v+w;if(i.position.y>T)continue;let V=1,M=R<.5?2*y/d:-2*y/d;const E=Math.sqrt(V*V+M*M),H=V/E,G=M/E,ee=i.userData.collisionSize;i.position.x=b-H*ee,i.position.y=T-G*ee}else{const d=i.userData.velocity.x,y=i.userData.velocity.y;Math.abs(d)>Math.abs(y)?i.position.x=d>0?B.left-i.userData.collisionSize:B.right+i.userData.collisionSize:i.position.y=y>0?B.bottom-i.userData.collisionSize:B.top+i.userData.collisionSize}i.position.z=.1,this.settleParticle(i);return}}}}}),t&&(this.active=!1)}settleParticle(e){e.userData.settled=!0,e.userData.velocity.x=0,e.userData.velocity.y=0,e.userData.velocity.z=0,e.material.color.setHex(16711680),e.material.emissive.setHex(16720418),e.material.emissiveIntensity=.8,e.material.needsUpdate=!0}clearParticles(){this.particles.forEach(e=>{this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}),this.particles=[],this.active=!1}reset(){this.clearParticles()}}class Bp{constructor(){if(this.sessionStartTime=Date.now(),this.frameRates=[],this.frameRateTrackingEnabled=!1,this.isLocalhost=this.checkIfLocalhost(),this.isLocalhost){console.log("Running on localhost - analytics tracking is disabled"),this.isAvailable=!1;return}this.isAvailable=typeof window<"u"&&typeof window.gtag=="function",this.isAvailable||console.warn("Google Analytics is not available - events will not be tracked")}checkIfLocalhost(){if(typeof window>"u"||!window.location)return!1;const e=window.location.hostname;return e==="localhost"||e==="127.0.0.1"||e===""||e.startsWith("192.168.")||e.startsWith("10.")||e.endsWith(".local")}trackEvent(e,t={}){if(this.isLocalhost){console.log(`[Analytics Disabled on Localhost] Event: ${e}`,t);return}if(this.isAvailable)try{window.gtag("event",e,t)}catch(n){console.error("Error tracking event:",n)}}trackGameStart(){this.sessionStartTime=Date.now(),this.frameRates=[],this.trackEvent("game_start")}trackGameOver(e,t,n,i,r){const o={reason:e,distance:Math.floor(t*10),time_seconds:Math.floor(n/1e3),time_formatted:this.formatTime(n),scene_name:i,score:r||0};if(this.frameRateTrackingEnabled&&this.frameRates.length>0){const a=this.frameRates.reduce((l,c)=>l+c,0)/this.frameRates.length;o.avg_frame_rate=Math.round(a)}this.trackEvent("game_over",o)}trackDistanceMilestone(e){const t=Math.floor((Date.now()-this.sessionStartTime)/1e3);this.trackEvent("distance_milestone",{milestone:e,time_to_milestone:t})}enableFrameRateTracking(){if(this.isLocalhost){console.log("[Analytics Disabled on Localhost] Frame rate tracking not enabled");return}this.frameRateTrackingEnabled=!0}trackFrameRate(e){this.isLocalhost||this.frameRateTrackingEnabled&&(this.frameRates.push(e),this.frameRates.length>100&&this.frameRates.shift())}formatTime(e){const t=e/1e3,n=Math.floor(t/60),i=Math.floor(t%60),r=Math.floor(t*100%100);return`${n.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}.${r.toString().padStart(2,"0")}`}}class _p{constructor(){this.frameRates=[],this.frameCount=0,this.lastFpsUpdateTime=performance.now(),this.currentFps=0,this.averageFps=0,this.updateInterval=500}reset(){this.frameRates=[],this.frameCount=0,this.lastFpsUpdateTime=performance.now(),this.currentFps=0,this.averageFps=0}update(e){this.frameCount++;const t=performance.now(),n=t-this.lastFpsUpdateTime;n>=this.updateInterval&&(this.currentFps=Math.round(this.frameCount*1e3/n),this.frameRates.push(this.currentFps),this.frameRates.length>100&&this.frameRates.shift(),this.averageFps=Math.round(this.frameRates.reduce((i,r)=>i+r,0)/this.frameRates.length),this.frameCount=0,this.lastFpsUpdateTime=t)}getCurrentFPS(){return this.currentFps}getAverageFPS(){return this.averageFps}getFrameRates(){return this.frameRates}getPerformanceInfo(){const e={currentFps:this.currentFps,averageFps:this.averageFps};if(window.performance&&window.performance.memory){const t=window.performance.memory;e.memory={usedHeapSize:Math.round(t.usedJSHeapSize/(1024*1024)),totalHeapSize:Math.round(t.totalJSHeapSize/(1024*1024)),limit:Math.round(t.jsHeapSizeLimit/(1024*1024))}}return e}}class vp{constructor(){this.audioListener=new ep,this.audioLoader=new Zf,this.currentTrack=null,this.currentTrackName=null,this.tracks=["ElectricWonderland.mp3","LoomingPinnacle.mp3","LostInTheAbyss.mp3","NeonPulse.mp3","RidingTheWaves.mp3","SadEnding.mp3","SpaceVoyage.mp3","SuperBlockBoyTheme.mp3","WhispersOfTheUnknown.mp3","Ascension.mp3","CelestialShimmer.mp3","DanceOfDemons.mp3","DigitalShowdown.mp3","EchoesOfMyself.mp3","MysteriousReverie.mp3","MeanderingRoam.mp3"],this.isPlaying=!1,this.isMuted=localStorage.getItem("musicMuted")==="true"}formatTrackName(e){const t=e.replace(".mp3","").split(/(?=[A-Z])/),n=["of","the","in","and","to","a","an"];return t.map(i=>{const r=i.toLowerCase();return n.includes(r)?r:i}).join(" ")}getCurrentTrackName(){return this.currentTrackName}init(e){e.add(this.audioListener)}playRandomTrack(){if(!this.isMuted&&!this.isPlaying){const e=Math.floor(Math.random()*this.tracks.length),n=`/game/music/${this.tracks[e]}`;this.currentTrackName=this.formatTrackName(this.tracks[e]),this.audioLoader.load(n,i=>{if(this.currentTrack=new tp(this.audioListener),this.currentTrack.setBuffer(i),this.currentTrack.setLoop(!1),this.currentTrack.onEnded=()=>{this.handleTrackEnded()},this.isMuted){this.currentTrack=null;return}this.currentTrack.play(),this.isPlaying=!0})}}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("musicMuted",this.isMuted),this.isMuted?this.currentTrack&&(this.currentTrack.stop(),this.currentTrack=null,this.isPlaying=!1):this.playRandomTrack(),this.isMuted}skipTrack(){this.currentTrack&&(this.currentTrack.stop(),this.currentTrack=null,this.isPlaying=!1,this.playRandomTrack())}stop(){this.currentTrack&&(this.currentTrack.stop(),this.currentTrack=null,this.isPlaying=!1)}pause(){this.currentTrack&&this.isPlaying&&(this.currentTrack.pause(),this.isPlaying=!1)}resume(){this.currentTrack&&!this.isPlaying&&(this.currentTrack.play(),this.isPlaying=!0)}handleTrackEnded(){this.isPlaying=!1,this.currentTrack=null,this.playRandomTrack()}}class xp{constructor(e,t,n){this.container=e,this.scoreElement=t,this.gameOverElement=n,this.isRunning=!1,this.isDead=!1,this.isPaused=!1,this.waitingForStart=!0,this.distance=0,this.gameTime=0,this.gameSpeed=1,this.lastFrameTime=0,this.finalScore=0,this.performanceTracker=new _p,this.analytics=new Bp,this.lastMilestone=0,this.milestoneIncrement=100,this.cameraOffsetX=6,this.baseFrustumHeight=10,this.baseFrustumWidth=16,this.maxVisibleWidth=19.2,this.gridCellSize=.5,this.referenceHeight=1e3,this.gridHeight=20,this.audioManager=new vp,this.initScene(),this.initCamera(),this.initRenderer(),this.handleResize(),this.debugManager=new mp(this.scene),this.blockManager=new rp(this.scene),this.obstacleManager=new sp(this.scene,this.blockManager),this.laserManager=new ap(this.scene,this.blockManager),this.portalManager=new dp(this.scene,this.blockManager),this.portalManager.setGame(this),this.portalTransitionActive=!1,this.levelGenerator=new up(this.scene,this.blockManager,this.obstacleManager,this.laserManager,this.portalManager,this.debugManager),this.player=new ip(this.scene,this.blockManager),this.collisionDetector=new pp,this.bloodParticleSystem=new gp(this.scene,this.blockManager,this.obstacleManager),this.saleBanner=new fp(this.scene,this.camera),this.player.mesh&&(this.player.mesh.visible=!1),this.saleBanner&&this.saleBanner.hide(),this.backgroundPlane.position.x=this.player.position.x,this.levelGenerator.reset(),window.addEventListener("resize",this.handleResize.bind(this)),this.setupBannerInteraction(),this.lastLightTargetX=0}setupBannerInteraction(){this.mouse=new ke,this.container.addEventListener("click",e=>{this.mouse.x=e.clientX/this.container.clientWidth*2-1,this.mouse.y=-(e.clientY/this.container.clientHeight)*2+1,this.saleBanner&&this.saleBanner.handleInteraction(this.mouse,this.camera,this.analytics)&&this.isRunning&&!this.waitingForStart&&!this.isDead&&(this.pause(),this.showPauseScreen())})}showPauseScreen(){const e=document.getElementById("splash-screen"),t=document.getElementById("paused-indicator"),n=document.getElementById("start-button"),i=document.querySelector(".start-hint");e&&(e.classList.remove("hidden"),e.classList.add("paused")),t&&(t.classList.remove("hidden"),t.classList.add("block")),n&&(n.textContent="Resume"),i&&(i.textContent="Press Enter to resume")}hidePauseScreen(){const e=document.getElementById("splash-screen"),t=document.getElementById("paused-indicator"),n=document.getElementById("start-button"),i=document.querySelector(".start-hint");n&&(n.textContent="Start"),i&&(i.textContent="Press Enter to start"),t&&(t.classList.remove("block"),t.classList.add("hidden")),e&&(e.classList.add("hidden"),e.classList.remove("paused"))}handleScreenInteraction(e){return this.saleBanner&&this.saleBanner.handleInteraction(e,this.camera,this.analytics)?(this.isRunning&&!this.waitingForStart&&!this.isDead&&(this.pause(),this.showPauseScreen()),!0):!1}initScene(){this.scene=new Hf,this.scene.background=new ze(8900331);const e=new gt(3e3,1e3),t=new Wt({color:12642559,roughness:1,metalness:0});this.backgroundPlane=new Ke(e,t),this.backgroundPlane.position.set(0,0,-.5),this.backgroundPlane.receiveShadow=!0,this.scene.add(this.backgroundPlane);const n=new jf(16777215,.6);this.scene.add(n),this.directionalLight=new Kf(16777215,.8),this.directionalLight.position.set(2,2,6),this.directionalLight.castShadow=!0,this.directionalLight.target=new st,this.directionalLight.target.position.set(0,0,0),this.scene.add(this.directionalLight.target),this.directionalLight.shadow.mapSize.width=1024,this.directionalLight.shadow.mapSize.height=1024,this.directionalLight.shadow.camera.near=.5,this.directionalLight.shadow.camera.far=20,this.directionalLight.shadow.camera.left=-12,this.directionalLight.shadow.camera.right=20,this.directionalLight.shadow.camera.top=8,this.directionalLight.shadow.camera.bottom=-8,this.directionalLight.shadow.bias=-1e-4,this.directionalLight.shadow.radius=1,this.scene.add(this.directionalLight)}initCamera(){this.camera=new or(this.baseFrustumWidth/-2,this.baseFrustumWidth/2,this.baseFrustumHeight/2,this.baseFrustumHeight/-2,.1,1e3),this.camera.position.set(this.cameraOffsetX,0,10),this.camera.lookAt(this.cameraOffsetX,0,0),this.audioManager.init(this.camera)}initRenderer(){this.renderer=new yo({antialias:!0,powerPreference:"high-performance"});const e=this.container.clientWidth,t=this.container.clientHeight;this.renderer.setSize(e,t),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=tr,this.renderer.outputColorSpace=nt,this.container.appendChild(this.renderer.domElement)}init(){this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.isRunning=!1,this.isDead=!1,this.waitingForStart=!0;const e=document.getElementById("score");e&&e.classList.add("hidden"),this.debugManager&&this.debugManager.initialPlayerPosition>0?(this.distance=this.debugManager.initialPlayerPosition,this.player.position.x=this.distance,this.player.mesh.position.x=this.distance,this.camera.position.x=this.player.position.x+this.cameraOffsetX,this.backgroundPlane.position.x=this.player.position.x,this.lastLightTargetX=this.player.position.x,console.log(`Starting at distance: ${this.distance}`)):(this.distance=0,this.lastLightTargetX=0),this.gameTime=0,this.gameSpeed=1,this.performanceTracker.reset(),this.lastFrameTime=performance.now(),this.updateDisplay(),this.renderer.render(this.scene,this.camera)}start(){this.isRunning=!0,this.isPaused=!1,this.waitingForStart=!1;const e=document.getElementById("press-to-start");e&&e.classList.add("hidden"),this.player&&this.player.mesh&&(this.player.mesh.visible=!0),this.saleBanner&&this.saleBanner.show(),this.player&&typeof this.player.showEyes=="function"&&this.player.showEyes();const t=document.getElementById("score"),n=document.getElementById("track-display");t&&(t.innerHTML="Distance: 0 m<br />Time: 00:00.00",t.classList.remove("hidden")),n&&n.classList.remove("hidden"),this.analytics.enableFrameRateTracking(),this.analytics.trackGameStart(),this.lastFrameTime=performance.now(),this.animate(this.lastFrameTime)}prepareGameAfterSplashScreen(){this.player&&this.player.mesh&&(this.player.mesh.visible=!0,typeof this.player.showEyes=="function"&&this.player.showEyes()),this.saleBanner&&this.saleBanner.show();const e=document.getElementById("score");e&&(window.matchMedia("(max-width: 768px)").matches?e.innerHTML="Tap anywhere to start":e.innerHTML="Press any key to start",e.classList.remove("hidden")),this.updateTrackDisplay();const t=document.getElementById("press-to-start");t&&t.classList.add("hidden")}pause(){this.portalTransitionActive||this.isRunning&&!this.isDead&&(this.isPaused=!0)}resume(){this.portalTransitionActive||this.isPaused&&(this.isPaused=!1,this.hidePauseScreen())}togglePause(){return this.portalTransitionActive?this.isPaused:(this.isPaused?this.resume():this.pause(),this.isPaused)}restart(){this.gameOverElement&&(this.gameOverElement.classList.add("hidden"),this.gameOverElement.classList.remove("visible"));const e=document.getElementById("score");document.getElementById("track-display"),e&&(window.matchMedia("(max-width: 768px)").matches?e.innerHTML="Tap anywhere to start":e.innerHTML="Press any key to start",e.classList.remove("hidden"));const t=document.getElementById("press-to-start");t&&t.classList.add("hidden"),this.player.reset(),this.obstacleManager.reset(),this.laserManager.reset(),this.blockManager.reset(),this.portalManager.cleanup(),this.levelGenerator.reset(),this.performanceTracker.reset(),this.bloodParticleSystem.clearParticles(),this.debugManager&&this.debugManager.clearMarkers(),this.player&&this.player.mesh&&(this.player.mesh.visible=!0,typeof this.player.showEyes=="function"&&this.player.showEyes()),this.saleBanner&&this.saleBanner.show(),this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.debugManager&&this.debugManager.initialPlayerPosition>0?this.distance=this.debugManager.initialPlayerPosition:this.distance=0,this.player.position.x=this.distance,this.player.mesh.position.x=this.distance,this.camera.position.x=this.player.position.x+this.cameraOffsetX,this.backgroundPlane.position.x=this.player.position.x,this.directionalLight.position.x=this.player.position.x+2,this.directionalLight.target.position.x=this.player.position.x,this.directionalLight.target.updateMatrixWorld(),this.lastLightTargetX=this.player.position.x,this.isRunning=!0,this.isDead=!1,this.waitingForStart=!0,this.gameTime=0,this.gameSpeed=1,this.lastMilestone=0,this.lastFrameTime=performance.now(),this.updateDisplay(),this.animate(this.lastFrameTime)}calculateScore(e,t){const i=Math.floor(e*10)*10,r=Math.floor(t/10);return{score:Math.max(0,i-r),distanceScore:i,timePenalty:r}}gameOver(e="obstacle"){this.isRunning=!1,this.isDead=!0,this.finalScore=this.calculateScore(this.distance,this.gameTime);const t=this.player.die();if(e==="fall"){const c={x:t.x,y:this.camera.position.y+this.camera.bottom-.5,z:t.z};this.bloodParticleSystem.createParticles(c)}else this.bloodParticleSystem.createParticles(t);let n='<span class="death-text">DEAD!</span>',i="";e==="fall"?i='<span class="death-text">You fell to your doom.</span>':e==="obstacle"?i='<span class="death-text">You were impaled. Ouch!</span>':e==="laser"&&(i='<span class="death-text">You were zapped into oblivion.</span>');const r=this.formatDistance(this.distance),o=this.formatTime(this.gameTime),a=this.calculateScore(this.distance,this.gameTime);this.finalScore=a.score,document.getElementById("game-over-message").innerHTML=n,document.getElementById("game-over-stats").innerHTML=`
      <div class="death-description">${i}</div>
      <div class="final-score"><strong>Score: ${this.finalScore}</strong></div>
      <div class="stat-row">Distance: ${r} <span class="score-bonus">(+${a.distanceScore} pts)</span></div>
      <div class="stat-row">Time: ${o} <span class="score-penalty">(-${a.timePenalty} pts)</span></div>
    `,setTimeout(()=>{this.gameOverElement.classList.remove("hidden"),this.gameOverElement.classList.add("visible")},1e3);const l=this.levelGenerator.getSceneNameAtPosition(this.distance);this.analytics.trackGameOver(e,this.distance,this.gameTime,l,this.finalScore)}updateDisplay(){if(this.updateTrackDisplay(),this.waitingForStart)return;const e=document.getElementById("score");e&&(e.innerHTML=`Distance: ${Math.floor(this.distance*10)} m<br />Time: ${this.formatTime(this.gameTime)}`),this.player.isColliding||this.levelGenerator.updatePlayerDistance(this.distance)}formatDistance(e){return`${Math.floor(e*10)} m`}formatTime(e){const n=Math.floor(e/10)*10/1e3,i=Math.floor(n/60),r=Math.floor(n%60),o=Math.floor(n*100%100);return`${i.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}.${o.toString().padStart(2,"0")}`}updateCoordinates(){this.debugManager&&this.debugManager.updateCoordinates(this.player)}handleKeyDown(e){if(e.key.toLowerCase()==="m"?this.audioManager.toggleMute():e.key.toLowerCase()==="n"&&this.audioManager.skipTrack(),this.waitingForStart&&!this.isDead&&!this.isPaused)this.start();else if(!this.isRunning)return;switch(e.key.toLowerCase()){case" ":case"arrowup":this.isPaused||(this.player.setJumpKeyHeld(!0),this.player.jump());break;case"arrowdown":this.isPaused||(this.player.setLeftKeyHeld(!0),this.player.updateSpeed());break;case"arrowright":case"d":this.isPaused||(this.player.setRightKeyHeld(!0),this.player.updateSpeed());break;case"arrowleft":case"a":this.isPaused||(this.player.setLeftKeyHeld(!0),this.player.updateSpeed());break}}handleKeyUp(e){if(this.isRunning)switch(e.key.toLowerCase()){case" ":case"arrowup":this.isPaused||this.player.setJumpKeyHeld(!1);break;case"arrowdown":this.isPaused||(this.player.setLeftKeyHeld(!1),this.player.updateSpeed());break;case"arrowright":case"d":this.isPaused||(this.player.setRightKeyHeld(!1),this.player.updateSpeed());break;case"arrowleft":case"a":this.isPaused||(this.player.setLeftKeyHeld(!1),this.player.updateSpeed());break}}toggleMusic(){this.audioManager.toggleMute()}nextTrack(){this.audioManager.skipTrack()}handleResize(){const e=this.container.clientWidth,t=this.container.clientHeight;let n,i;const r=e/t,o=this.baseFrustumWidth/this.baseFrustumHeight;r<o?(i=this.baseFrustumWidth,n=i/r):(n=this.baseFrustumHeight*(t/this.referenceHeight),n=Math.max(n,this.baseFrustumHeight),i=n*r),this.camera.left=i/-2,this.camera.right=i/2,this.camera.top=n-5,this.camera.bottom=-5,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}update(e){if(!this.isRunning&&!this.bloodParticleSystem.active&&!this.isDead||this.portalTransitionActive)return;const t=Math.min(e,100),n=t/16.67*this.gameSpeed;if(this.waitingForStart){this.player&&this.player.animateEyes(n),this.bloodParticleSystem&&this.bloodParticleSystem.active&&(this.bloodParticleSystem.updateCameraViewBoundaries(this.camera,this.cameraOffsetX),this.bloodParticleSystem.update(n));return}if(this.laserManager.update(n),this.saleBanner&&this.saleBanner.update(this.player.position,this.camera.position),!this.isDead){if(this.levelGenerator.update(this.player.position.x),this.player.position.y<this.camera.position.y+this.camera.bottom-1){this.gameOver("fall");return}if(this.player.update(n),this.updateCoordinates(),!this.player.isColliding&&!this.isDead){this.updateCameraPosition(),this.distance=this.player.position.x;const o=Math.floor(this.distance*10),a=Math.floor(o/this.milestoneIncrement)*this.milestoneIncrement;a>this.lastMilestone&&(this.analytics.trackDistanceMilestone(a),this.lastMilestone=a)}this.gameTime+=t;const i=this.obstacleManager.getObstacles();if(this.collisionDetector.checkCollisionWithMeshes(this.player,i)){this.gameOver("obstacle");return}const r=this.player.getBounds();if(this.laserManager.checkCollision(r)){this.gameOver("laser");return}this.portalManager&&this.portalManager.update(this.player.position)}this.bloodParticleSystem&&(this.bloodParticleSystem.updateCameraViewBoundaries(this.camera,this.cameraOffsetX),this.bloodParticleSystem.update(n))}updateCameraPosition(){const e=this.camera.right-this.camera.left;let t=this.player.position.x+this.cameraOffsetX;if(e>this.maxVisibleWidth){const r=e-this.maxVisibleWidth;t-=r/2}this.camera.position.x=t,this.backgroundPlane.position.x=this.player.position.x,this.directionalLight.position.x=this.player.position.x+2,Math.abs(this.lastLightTargetX-this.player.position.x)>.05&&(this.directionalLight.target.position.x=this.player.position.x,this.directionalLight.target.updateMatrixWorld(),this.lastLightTargetX=this.player.position.x)}animate(e){const t=e-this.lastFrameTime;if(this.lastFrameTime=e,this.performanceTracker.update(t),this.analytics.frameRateTrackingEnabled){const n=this.performanceTracker.getCurrentFPS();n>0&&this.analytics.trackFrameRate(n)}if(this.debugManager){const n=this.performanceTracker.getPerformanceInfo();this.debugManager.updatePerformance(n),n&&typeof n.currentFps=="number"&&(this.debugManager.currentFps=n.currentFps)}this.updateDisplay(),(this.waitingForStart||this.isDead)&&this.player&&this.updateCameraPosition(),this.isPaused||this.update(t),this.renderer.render(this.scene,this.camera),this.animationFrameId=requestAnimationFrame(this.animate.bind(this))}cleanup(){this.audioManager.stop(),this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.debugManager&&this.debugManager.cleanup(),this.laserManager&&this.laserManager.reset(),this.portalManager&&this.portalManager.cleanup(),this.bloodParticleSystem&&this.bloodParticleSystem.clearParticles(),this.saleBanner&&this.saleBanner.cleanup(),window.removeEventListener("resize",this.handleResize.bind(this)),this.renderer.dispose(),this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement),this.scene=null,this.camera=null,this.renderer=null,this.player=null,this.blockManager=null,this.obstacleManager=null,this.laserManager=null,this.levelGenerator=null,this.debugManager=null,this.collisionDetector=null,this.bloodParticleSystem=null}updateTrackDisplay(){const e=document.getElementById("track-display");if(e){const t=this.audioManager.getCurrentTrackName(),n=this.audioManager.isMuted,i=this.audioManager.isPlaying;t&&!n&&i?(e.innerHTML=`♪ ${t} ♪`,e.classList.remove("hidden")):e.classList.add("hidden")}}}function Mp(s){if(s=s||document.documentElement,dr()){if(window.navigator.standalone)return;const e=document.getElementById("add-to-home-screen");e&&(e.style.display="flex");return}!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement?s.requestFullscreen?s.requestFullscreen():s.msRequestFullscreen?s.msRequestFullscreen():s.mozRequestFullScreen?s.mozRequestFullScreen():s.webkitRequestFullscreen&&s.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}function Sp(){try{screen.orientation&&screen.orientation.lock?screen.orientation.lock("landscape").catch(function(s){console.log("Screen orientation lock failed: ",s)}):screen.lockOrientation?screen.lockOrientation("landscape"):screen.mozLockOrientation?screen.mozLockOrientation("landscape"):screen.msLockOrientation&&screen.msLockOrientation("landscape")}catch(s){console.log("Screen orientation lock failed: ",s)}}function zs(){const s=document.getElementById("rotate-device");window.matchMedia("(orientation: portrait)").matches?(s&&s.classList.add("flex"),s&&s.classList.remove("hidden")):(s&&s.classList.add("hidden"),s&&s.classList.remove("flex"))}function yp(){const s="ontouchstart"in window||navigator.maxTouchPoints>0,e=window.innerWidth<=768,t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),n=dr(),i=s&&(e||t)||n;return console.log("isMobileDevice",i),i}function dr(){const s=navigator.userAgent.toLowerCase();return/ipad|iphone|ipod/.test(s)||s.includes("mac")&&"ontouchend"in document||navigator.maxTouchPoints>0&&/mac/i.test(s)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||navigator.platform==="iPhone"||navigator.platform==="iPad"||navigator.platform==="iPod"}function Ep(){return window.navigator.standalone||window.matchMedia("(display-mode: standalone)").matches||window.matchMedia("(display-mode: fullscreen)").matches}window.addEventListener("load",()=>{const s=document.getElementById("game-container"),e=document.getElementById("score"),t=document.getElementById("game-over"),n=document.getElementById("restart-button"),i=document.getElementById("splash-screen"),r=document.getElementById("start-button"),o=document.getElementById("fullscreen-button"),a=document.getElementById("pause-button");Ep()&&document.body.classList.add("standalone-mode"),yp()&&(document.body.classList.add("is-mobile"),zs(),window.addEventListener("resize",zs),window.addEventListener("orientationchange",()=>{setTimeout(zs,300)}),Sp()),a&&a.addEventListener("click",()=>{l.isRunning&&!l.isDead&&!l.portalTransitionActive&&(l.togglePause()?l.showPauseScreen():l.hidePauseScreen())}),o&&o.addEventListener("click",()=>{if(dr()){const g=document.getElementById("add-to-home-screen");g&&(g.style.display="flex")}else Mp()});const l=new xp(s,e,t);l.init(),l.animate(performance.now()),r.addEventListener("click",()=>{i.classList.add("hidden"),l.audioManager.playRandomTrack(),l.isPaused?l.resume():l.prepareGameAfterSplashScreen()}),n.addEventListener("click",()=>{t.classList.remove("visible"),t.classList.add("hidden"),l.restart()}),window.addEventListener("keydown",g=>{if(!i.classList.contains("hidden")&&!l.isPaused){g.code==="Enter"&&(i.classList.add("hidden"),l.audioManager.playRandomTrack(),l.prepareGameAfterSplashScreen()),g.preventDefault();return}if(g.code==="Enter"){l.isPaused?(l.resume(),g.preventDefault()):t.classList.contains("visible")?(t.classList.remove("visible"),t.classList.add("hidden"),l.restart(),g.preventDefault()):l.waitingForStart&&i.classList.contains("hidden")&&!t.classList.contains("visible")?(l.start(),g.preventDefault()):l.isRunning&&!l.isDead&&!l.portalTransitionActive&&(l.togglePause()?l.showPauseScreen():l.hidePauseScreen(),g.preventDefault());return}l.waitingForStart&&i.classList.contains("hidden")&&!t.classList.contains("visible")&&(l.start(),g.preventDefault());let f=g.key.toLowerCase();g.code==="Space"&&(f=" "),g.code==="ArrowRight"&&(f="arrowright"),g.code==="ArrowLeft"&&(f="arrowleft"),g.code==="ArrowUp"&&(f="arrowup"),g.code==="ArrowDown"&&(f="arrowdown"),g.code==="KeyD"&&(f="d"),g.code==="KeyA"&&(f="a"),l.handleKeyDown({key:f})}),window.addEventListener("keyup",g=>{let f=g.key.toLowerCase();g.code==="Space"&&(f=" "),g.code==="ArrowRight"&&(f="arrowright"),g.code==="ArrowLeft"&&(f="arrowleft"),g.code==="ArrowUp"&&(f="arrowup"),g.code==="ArrowDown"&&(f="arrowdown"),g.code==="KeyD"&&(f="d"),g.code==="KeyA"&&(f="a"),l.handleKeyUp({key:f})}),s.addEventListener("touchstart",g=>{if(!i.classList.contains("hidden")&&!l.isPaused){const R=r.getBoundingClientRect(),w=g.touches[0].clientX,T=g.touches[0].clientY;w>=R.left&&w<=R.right&&T>=R.top&&T<=R.bottom&&(i.classList.add("hidden"),l.audioManager.playRandomTrack(),l.isPaused?l.resume():l.prepareGameAfterSplashScreen());return}const f=c?c.getBoundingClientRect():null,d=h?h.getBoundingClientRect():null,y=g.touches[0].clientX,v=g.touches[0].clientY;if(!(f&&y>=f.left&&y<=f.right&&v>=f.top&&v<=f.bottom||d&&y>=d.left&&y<=d.right&&v>=d.top&&v<=d.bottom)){const R=s.getBoundingClientRect(),w=(y-R.left)/R.width*2-1,T=-((v-R.top)/R.height)*2+1,V=new ke(w,T);if(l.handleScreenInteraction(V))return}l.waitingForStart&&i.classList.contains("hidden")&&!t.classList.contains("visible")?l.start():l.isRunning&&!l.isPaused&&l.handleKeyDown({key:" "})}),s.addEventListener("touchend",()=>{l.isRunning&&!l.isPaused&&l.handleKeyUp({key:" "})});const c=document.getElementById("speed-up"),h=document.getElementById("speed-down");c&&(c.addEventListener("touchstart",g=>{g.preventDefault(),g.stopPropagation(),!(!i.classList.contains("hidden")&&!l.isPaused)&&(l.waitingForStart&&i.classList.contains("hidden")&&!t.classList.contains("visible")?(l.start(),l.handleKeyDown({key:"arrowright"})):l.isRunning&&!l.isPaused&&l.handleKeyDown({key:"arrowright"}))}),c.addEventListener("touchend",g=>{g.preventDefault(),g.stopPropagation(),l.isRunning&&!l.isPaused&&l.handleKeyUp({key:"arrowright"})})),h&&(h.addEventListener("touchstart",g=>{g.preventDefault(),g.stopPropagation(),!(!i.classList.contains("hidden")&&!l.isPaused)&&(l.waitingForStart&&i.classList.contains("hidden")&&!t.classList.contains("visible")?(l.start(),l.handleKeyDown({key:"arrowleft"})):l.isRunning&&!l.isPaused&&l.handleKeyDown({key:"arrowleft"}))}),h.addEventListener("touchend",g=>{g.preventDefault(),g.stopPropagation(),l.isRunning&&!l.isPaused&&l.handleKeyUp({key:"arrowleft"})}));const u=document.getElementById("add-to-home-screen"),p=u.querySelector(".dismiss-button");function m(){u.style.display="none"}p.addEventListener("click",()=>{m()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(l.isPaused||l.pause())});const B=document.getElementById("loading-overlay");B&&(B.classList.add("opacity-0"),setTimeout(()=>{B.classList.add("hidden")},500))});
//# sourceMappingURL=main-WBQhMOIy.js.map
