!function(b){"use strict";var a,e=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,f=Math.ceil,g=Math.floor,c="[BigNumber Error] ",h=c+"Number primitive has more than 15 significant digits: ",i=14,j=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13];function d(r){var s,t,u,v,w,x,y,z,A,a=b.prototype={constructor:b,toString:null,valueOf:null},B=new b(1),C=20,D=4,E=-7,F=21,G=-1e7,H=1e7,I=!1,J=1,K=0,L={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},M="0123456789abcdefghijklmnopqrstuvwxyz",N=!0;function b(d,l){var o,p,q,j,f,m,k,a,c=this;if(!(c instanceof b))return new b(d,l);if(null==l){if(d&& !0===d._isBigNumber){c.s=d.s,!d.c||d.e>H?c.c=c.e=null:d.e<G?c.c=[c.e=0]:(c.e=d.e,c.c=d.c.slice());return}if((m="number"==typeof d)&&0*d==0){if(c.s=1/d<0?(d=-d,-1):1,d=== ~~d){for(j=0,f=d;f>=10;f/=10,j++);j>H?c.c=c.e=null:(c.e=j,c.c=[d]);return}a=String(d)}else{if(!e.test(a=String(d)))return A(c,a,m);c.s=45==a.charCodeAt(0)?(a=a.slice(1),-1):1}(j=a.indexOf("."))> -1&&(a=a.replace(".","")),(f=a.search(/e/i))>0?(j<0&&(j=f),j+=+a.slice(f+1),a=a.substring(0,f)):j<0&&(j=a.length)}else{if(n(l,2,M.length,"Base"),10==l&&N)return c=new b(d),R(c,C+c.e+1,D);if(a=String(d),m="number"==typeof d){if(0*d!=0)return A(c,a,m,l);if(c.s=1/d<0?(a=a.slice(1),-1):1,b.DEBUG&&a.replace(/^0\.0*|\./,"").length>15)throw Error(h+d)}else c.s=45===a.charCodeAt(0)?(a=a.slice(1),-1):1;for(o=M.slice(0,l),j=f=0,k=a.length;f<k;f++)if(0>o.indexOf(p=a.charAt(f))){if("."==p){if(f>j){j=k;continue}}else if(!q&&(a==a.toUpperCase()&&(a=a.toLowerCase())||a==a.toLowerCase()&&(a=a.toUpperCase()))){q=!0,f=-1,j=0;continue}return A(c,String(d),m,l)}m=!1,(j=(a=z(a,l,10,c.s)).indexOf("."))> -1?a=a.replace(".",""):j=a.length}for(f=0;48===a.charCodeAt(f);f++);for(k=a.length;48===a.charCodeAt(--k););if(a=a.slice(f,++k)){if(k-=f,m&&b.DEBUG&&k>15&&(d>9007199254740991||d!==g(d)))throw Error(h+c.s*d);if((j=j-f-1)>H)c.c=c.e=null;else if(j<G)c.c=[c.e=0];else{if(c.e=j,c.c=[],f=(j+1)%i,j<0&&(f+=i),f<k){for(f&&c.c.push(+a.slice(0,f)),k-=i;f<k;)c.c.push(+a.slice(f,f+=i));f=i-(a=a.slice(f)).length}else f-=k;for(;f--;a+="0");c.c.push(+a)}}else c.c=[c.e=0]}function O(c,d,h,i){var j,e,f,g,a;if(null==h?h=D:n(h,0,8),!c.c)return c.toString();if(j=c.c[0],f=c.e,null==d)a=l(c.c),a=1==i||2==i&&(f<=E||f>=F)?p(a,f):q(a,f,"0");else if(e=(c=R(new b(c),d,h)).e,a=l(c.c),g=a.length,1==i||2==i&&(d<=e||e<=E)){for(;g<d;a+="0",g++);a=p(a,e)}else if(d-=f,a=q(a,e,"0"),e+1>g){if(--d>0)for(a+=".";d--;a+="0");}else if((d+=e-g)>0)for(e+1==g&&(a+=".");d--;a+="0");return c.s<0&&j?"-"+a:a}function P(d,f){for(var a,e=1,c=new b(d[0]);e<d.length;e++)if((a=new b(d[e])).s)f.call(c,a)&&(c=a);else{c=a;break}return c}function Q(a,b,c){for(var e=1,d=b.length;!b[--d];b.pop());for(d=b[0];d>=10;d/=10,e++);return(c=e+c*i-1)>H?a.c=a.e=null:c<G?a.c=[a.e=0]:(a.e=c,a.c=b),a}function R(c,o,p,l){var k,d,b,e,m,h,q,a=c.c,n=j;if(a){out:{for(k=1,e=a[0];e>=10;e/=10,k++);if((d=o-k)<0)d+=i,b=o,q=(m=a[h=0])/n[k-b-1]%10|0;else if((h=f((d+1)/i))>=a.length){if(l){for(;a.length<=h;a.push(0));m=q=0,k=1,d%=i,b=d-i+1}else break out}else{for(k=1,m=e=a[h];e>=10;e/=10,k++);d%=i,q=(b=d-i+k)<0?0:m/n[k-b-1]%10|0}if(l=l||o<0||null!=a[h+1]||(b<0?m:m%n[k-b-1]),l=p<4?(q||l)&&(0==p||p==(c.s<0?3:2)):q>5||5==q&&(4==p||l||6==p&&(d>0?b>0?m/n[k-b]:0:a[h-1])%10&1||p==(c.s<0?8:7)),o<1||!a[0])return a.length=0,l?(o-=c.e+1,a[0]=n[(i-o%i)%i],c.e=-o||0):a[0]=c.e=0,c;if(0==d?(a.length=h,e=1,h--):(a.length=h+1,e=n[i-d],a[h]=b>0?g(m/n[k-b]%n[b])*e:0),l)for(;;){if(0==h){for(d=1,b=a[0];b>=10;b/=10,d++);for(b=a[0]+=e,e=1;b>=10;b/=10,e++);d!=e&&(c.e++,1e14==a[0]&&(a[0]=1));break}if(a[h]+=e,1e14!=a[h])break;a[h--]=0,e=1}for(d=a.length;0===a[--d];a.pop());}c.e>H?c.c=c.e=null:c.e<G&&(c.c=[c.e=0])}return c}function S(c){var a,b=c.e;return null===b?c.toString():(a=l(c.c),a=b<=E||b>=F?p(a,b):q(a,b,"0"),c.s<0?"-"+a:a)}return b.clone=d,b.ROUND_UP=0,b.ROUND_DOWN=1,b.ROUND_CEIL=2,b.ROUND_FLOOR=3,b.ROUND_HALF_UP=4,b.ROUND_HALF_DOWN=5,b.ROUND_HALF_EVEN=6,b.ROUND_HALF_CEIL=7,b.ROUND_HALF_FLOOR=8,b.EUCLID=9,b.config=b.set=function(d){var b,a;if(null!=d){if("object"==typeof d){if(d.hasOwnProperty(b="DECIMAL_PLACES")&&(n(a=d[b],0,1e9,b),C=a),d.hasOwnProperty(b="ROUNDING_MODE")&&(n(a=d[b],0,8,b),D=a),d.hasOwnProperty(b="EXPONENTIAL_AT")&&((a=d[b])&&a.pop?(n(a[0],-1e9,0,b),n(a[1],0,1e9,b),E=a[0],F=a[1]):(n(a,-1e9,1e9,b),E=-(F=a<0?-a:a))),d.hasOwnProperty(b="RANGE")){if((a=d[b])&&a.pop)n(a[0],-1e9,-1,b),n(a[1],1,1e9,b),G=a[0],H=a[1];else if(n(a,-1e9,1e9,b),a)G=-(H=a<0?-a:a);else throw Error(c+b+" cannot be zero: "+a)}if(d.hasOwnProperty(b="CRYPTO")){if(!!(a=d[b])===a){if(a){if("undefined"!=typeof crypto&&crypto&&(crypto.getRandomValues||crypto.randomBytes))I=a;else throw I=!a,Error(c+"crypto unavailable")}else I=a}else throw Error(c+b+" not true or false: "+a)}if(d.hasOwnProperty(b="MODULO_MODE")&&(n(a=d[b],0,9,b),J=a),d.hasOwnProperty(b="POW_PRECISION")&&(n(a=d[b],0,1e9,b),K=a),d.hasOwnProperty(b="FORMAT")){if("object"==typeof(a=d[b]))L=a;else throw Error(c+b+" not an object: "+a)}if(d.hasOwnProperty(b="ALPHABET")){if("string"!=typeof(a=d[b])||/^.?$|[+\-.\s]|(.).*\1/.test(a))throw Error(c+b+" invalid: "+a);N="0123456789"==a.slice(0,10),M=a}}else throw Error(c+"Object expected: "+d)}return{DECIMAL_PLACES:C,ROUNDING_MODE:D,EXPONENTIAL_AT:[E,F],RANGE:[G,H],CRYPTO:I,MODULO_MODE:J,POW_PRECISION:K,FORMAT:L,ALPHABET:M}},b.isBigNumber=function(f){if(!f|| !0!==f._isBigNumber)return!1;if(!b.DEBUG)return!0;var a,h,d=f.c,e=f.e,j=f.s;out:if("[object Array]"==({}).toString.call(d)){if((1===j|| -1===j)&&e>= -1e9&&e<=1e9&&e===g(e)){if(0===d[0]){if(0===e&&1===d.length)return!0;break out}if((a=(e+1)%i)<1&&(a+=i),String(d[0]).length==a){for(a=0;a<d.length;a++)if((h=d[a])<0||h>=1e14||h!==g(h))break out;if(0!==h)return!0}}}else if(null===d&&null===e&&(null===j||1===j|| -1===j))return!0;throw Error(c+"Invalid BigNumber: "+f)},b.maximum=b.max=function(){return P(arguments,a.lt)},b.minimum=b.min=function(){return P(arguments,a.gt)},b.random=(s=9007199254740992*Math.random()&2097151?function(){return g(9007199254740992*Math.random())}:function(){return(1073741824*Math.random()|0)*8388608+(8388608*Math.random()|0)},function(l){var d,o,m,k,e,a=0,h=[],p=new b(B);if(null==l?l=C:n(l,0,1e9),k=f(l/i),I){if(crypto.getRandomValues){for(d=crypto.getRandomValues(new Uint32Array(k*=2));a<k;)(e=131072*d[a]+(d[a+1]>>>11))>=9e15?(o=crypto.getRandomValues(new Uint32Array(2)),d[a]=o[0],d[a+1]=o[1]):(h.push(e%1e14),a+=2);a=k/2}else if(crypto.randomBytes){for(d=crypto.randomBytes(k*=7);a<k;)(e=(31&d[a])*281474976710656+1099511627776*d[a+1]+4294967296*d[a+2]+16777216*d[a+3]+(d[a+4]<<16)+(d[a+5]<<8)+d[a+6])>=9e15?crypto.randomBytes(7).copy(d,a):(h.push(e%1e14),a+=7);a=k/7}else throw I=!1,Error(c+"crypto unavailable")}if(!I)for(;a<k;)(e=s())<9e15&&(h[a++]=e%1e14);for(k=h[--a],l%=i,k&&l&&(e=j[i-l],h[a]=g(k/e)*e);0===h[a];h.pop(),a--);if(a<0)h=[m=0];else{for(m=-1;0===h[0];h.splice(0,1),m-=i);for(a=1,e=h[0];e>=10;e/=10,a++);a<i&&(m-=i-a)}return p.e=m,p.c=h,p}),b.sum=function(){for(var d=1,a=arguments,c=new b(a[0]);d<a.length;)c=c.plus(a[d++]);return c},z=function(){var a="0123456789";function c(e,g,c,h){for(var b,d,a=[0],f=0,i=e.length;f<i;){for(d=a.length;d--;a[d]*=g);for(a[0]+=h.indexOf(e.charAt(f++)),b=0;b<a.length;b++)a[b]>c-1&&(null==a[b+1]&&(a[b+1]=0),a[b+1]+=a[b]/c|0,a[b]%=c)}return a.reverse()}return function(f,s,o,t,u){var j,i,m,g,k,e,d,p,h=f.indexOf("."),r=C,n=D;for(h>=0&&(g=K,K=0,f=f.replace(".",""),e=(p=new b(s)).pow(f.length-h),K=g,p.c=c(q(l(e.c),e.e,"0"),10,o,a),p.e=p.c.length),m=g=(d=c(f,s,o,u?(j=M,a):(j=a,M))).length;0==d[--g];d.pop());if(!d[0])return j.charAt(0);if(h<0?--m:(e.c=d,e.e=m,e.s=t,d=(e=y(e,p,r,n,o)).c,k=e.r,m=e.e),h=d[i=m+r+1],g=o/2,k=k||i<0||null!=d[i+1],k=n<4?(null!=h||k)&&(0==n||n==(e.s<0?3:2)):h>g||h==g&&(4==n||k||6==n&&1&d[i-1]||n==(e.s<0?8:7)),i<1||!d[0])f=k?q(j.charAt(1),-r,j.charAt(0)):j.charAt(0);else{if(d.length=i,k)for(--o;++d[--i]>o;)d[i]=0,i||(++m,d=[1].concat(d));for(g=d.length;!d[--g];);for(h=0,f="";h<=g;f+=j.charAt(d[h++]));f=q(f,m,j.charAt(0))}return f}}(),y=function(){function a(a,h,i){var d,e,f,g,b=0,c=a.length,j=h%1e7,k=h/1e7|0;for(a=a.slice();c--;)f=a[c]%1e7,g=a[c]/1e7|0,d=k*f+g*j,e=j*f+d%1e7*1e7+b,b=(e/i|0)+(d/1e7|0)+k*g,a[c]=e%i;return b&&(a=[b].concat(a)),a}function c(d,e,c,f){var a,b;if(c!=f)b=c>f?1:-1;else for(a=b=0;a<c;a++)if(d[a]!=e[a]){b=d[a]>e[a]?1:-1;break}return b}function d(a,d,b,e){for(var c=0;b--;)a[b]-=c,c=a[b]<d[b]?1:0,a[b]=c*e+a[b]-d[b];for(;!a[0]&&a.length>1;a.splice(0,1));}return function(u,v,E,F,l){var w,x,o,z,m,q,r,s,t,f,h,A,B,C,D,p,y,n=u.s==v.s?1:-1,j=u.c,e=v.c;if(!j||!j[0]||!e||!e[0])return new b(u.s&&v.s&&(j?!e||j[0]!=e[0]:e)?j&&0==j[0]||!e?0*n:n/0:NaN);for(t=(s=new b(n)).c=[],n=E+(x=u.e-v.e)+1,l||(l=1e14,x=k(u.e/i)-k(v.e/i),n=n/i|0),o=0;e[o]==(j[o]||0);o++);if(e[o]>(j[o]||0)&&x--,n<0)t.push(1),z=!0;else{for(C=j.length,p=e.length,o=0,n+=2,(m=g(l/(e[0]+1)))>1&&(e=a(e,m,l),j=a(j,m,l),p=e.length,C=j.length),B=p,h=(f=j.slice(0,p)).length;h<p;f[h++]=0);y=e.slice(),y=[0].concat(y),D=e[0],e[1]>=l/2&&D++;do{if(m=0,(w=c(e,f,p,h))<0){if(A=f[0],p!=h&&(A=A*l+(f[1]||0)),(m=g(A/D))>1)for(m>=l&&(m=l-1),r=(q=a(e,m,l)).length,h=f.length;1==c(q,f,r,h);)m--,d(q,p<r?y:e,r,l),r=q.length,w=1;else 0==m&&(w=m=1),r=(q=e.slice()).length;if(r<h&&(q=[0].concat(q)),d(f,q,h,l),h=f.length,-1==w)for(;1>c(e,f,p,h);)m++,d(f,p<h?y:e,h,l),h=f.length}else 0===w&&(m++,f=[0]);t[o++]=m,f[0]?f[h++]=j[B]||0:(f=[j[B]],h=1)}while(((B++)<C||null!=f[0])&&n--)z=null!=f[0],t[0]||t.splice(0,1)}if(1e14==l){for(o=1,n=t[0];n>=10;n/=10,o++);R(s,E+(s.e=o+x*i-1)+1,F,z)}else s.e=x,s.r=+z;return s}}(),A=(t=/^(-?)0([xbo])(?=\w[\w.]*$)/i,u=/^([^.]+)\.$/,v=/^\.([^.]+)$/,w=/^-?(Infinity|NaN)$/,x=/^\s*\+(?=[\w.])|^\s+|\s+$/g,function(d,e,g,f){var h,a=g?e:e.replace(x,"");if(w.test(a))d.s=isNaN(a)?null:a<0?-1:1;else{if(!g&&(a=a.replace(t,function(b,c,a){return h="x"==(a=a.toLowerCase())?16:"b"==a?2:8,f&&f!=h?b:c}),f&&(h=f,a=a.replace(u,"$1").replace(v,"0.$1")),e!=a))return new b(a,h);if(b.DEBUG)throw Error(c+"Not a"+(f?" base "+f:"")+" number: "+e);d.s=null}d.c=d.e=null}),a.absoluteValue=a.abs=function(){var a=new b(this);return a.s<0&&(a.s=1),a},a.comparedTo=function(a,c){return m(this,new b(a,c))},a.decimalPlaces=a.dp=function(e,d){var f,a,c;if(null!=e)return n(e,0,1e9),null==d?d=D:n(d,0,8),R(new b(this),e+this.e+1,d);if(!(f=this.c))return null;if(a=((c=f.length-1)-k(this.e/i))*i,c=f[c])for(;c%10==0;c/=10,a--);return a<0&&(a=0),a},a.dividedBy=a.div=function(a,c){return y(this,new b(a,c),C,D)},a.dividedToIntegerBy=a.idiv=function(a,c){return y(this,new b(a,c),0,1)},a.exponentiatedBy=a.pow=function(d,h){var q,p,k,j,r,m,n,l,e,a=this;if((d=new b(d)).c&&!d.isInteger())throw Error(c+"Exponent not an integer: "+S(d));if(null!=h&&(h=new b(h)),m=d.e>14,!a.c||!a.c[0]||1==a.c[0]&&!a.e&&1==a.c.length||!d.c||!d.c[0])return e=new b(Math.pow(+S(a),m?2-o(d):+S(d))),h?e.mod(h):e;if(n=d.s<0,h){if(h.c?!h.c[0]:!h.s)return new b(NaN);(p=!n&&a.isInteger()&&h.isInteger())&&(a=a.mod(h))}else{if(d.e>9&&(a.e>0||a.e< -1||(0==a.e?a.c[0]>1||m&&a.c[1]>=24e7:a.c[0]<8e13||m&&a.c[0]<=9999975e7)))return j=(a.s<0&&o(d),-0),a.e> -1&&(j=1/j),new b(n?1/j:j);K&&(j=f(K/i+2))}for(m?(q=new b(.5),n&&(d.s=1),l=o(d)):l=(k=Math.abs(+S(d)))%2,e=new b(B);;){if(l){if(!(e=e.times(a)).c)break;j?e.c.length>j&&(e.c.length=j):p&&(e=e.mod(h))}if(k){if(0===(k=g(k/2)))break;l=k%2}else if(R(d=d.times(q),d.e+1,1),d.e>14)l=o(d);else{if(0==(k=+S(d)))break;l=k%2}a=a.times(a),j?a.c&&a.c.length>j&&(a.c.length=j):p&&(a=a.mod(h))}return p?e:(n&&(e=B.div(e)),h?e.mod(h):j?R(e,K,D,r):e)},a.integerValue=function(a){var c=new b(this);return null==a?a=D:n(a,0,8),R(c,c.e+1,a)},a.isEqualTo=a.eq=function(a,c){return 0===m(this,new b(a,c))},a.isFinite=function(){return!!this.c},a.isGreaterThan=a.gt=function(a,c){return m(this,new b(a,c))>0},a.isGreaterThanOrEqualTo=a.gte=function(c,a){return 1===(a=m(this,new b(c,a)))||0===a},a.isInteger=function(){return!!this.c&&k(this.e/i)>this.c.length-2},a.isLessThan=a.lt=function(a,c){return 0>m(this,new b(a,c))},a.isLessThanOrEqualTo=a.lte=function(c,a){return -1===(a=m(this,new b(c,a)))||0===a},a.isNaN=function(){return!this.s},a.isNegative=function(){return this.s<0},a.isPositive=function(){return this.s>0},a.isZero=function(){return!!this.c&&0==this.c[0]},a.minus=function(d,c){var h,g,j,o,m=this,f=m.s;if(c=(d=new b(d,c)).s,!f||!c)return new b(NaN);if(f!=c)return d.s=-c,m.plus(d);var n=m.e/i,l=d.e/i,a=m.c,e=d.c;if(!n||!l){if(!a||!e)return a?(d.s=-c,d):new b(e?m:NaN);if(!a[0]||!e[0])return e[0]?(d.s=-c,d):new b(a[0]?m:-0)}if(n=k(n),l=k(l),a=a.slice(),f=n-l){for((o=f<0)?(f=-f,j=a):(l=n,j=e),j.reverse(),c=f;c--;j.push(0));j.reverse()}else for(g=(o=(f=a.length)<(c=e.length))?f:c,f=c=0;c<g;c++)if(a[c]!=e[c]){o=a[c]<e[c];break}if(o&&(j=a,a=e,e=j,d.s=-d.s),(c=(g=e.length)-(h=a.length))>0)for(;c--;a[h++]=0);for(c=99999999999999;g>f;){if(a[--g]<e[g]){for(h=g;h&&!a[--h];a[h]=c);--a[h],a[g]+=1e14}a[g]-=e[g]}for(;0==a[0];a.splice(0,1),--l);return a[0]?Q(d,a,l):(d.s=3==D?-1:1,d.c=[d.e=0],d)},a.modulo=a.mod=function(a,e){var c,d;return(a=new b(a,e),this.c&&a.s&&(!a.c||a.c[0]))?a.c&&(!this.c||this.c[0])?(9==J?(d=a.s,a.s=1,c=y(this,a,0,3),a.s=d,c.s*=d):c=y(this,a,0,J),(a=this.minus(c.times(a))).c[0]||1!=J||(a.s=this.s),a):new b(this):new b(NaN)},a.multipliedBy=a.times=function(a,v){var j,o,e,l,p,q,m,h,r,n,s,t,f,u,g,c=this.c,d=(a=new b(a,v)).c;if(!c||!d||!c[0]||!d[0])return this.s&&a.s&&(!c||c[0]||d)&&(!d||d[0]||c)?(a.s*=this.s,c&&d?(a.c=[0],a.e=0):a.c=a.e=null):a.c=a.e=a.s=null,a;for(o=k(this.e/i)+k(a.e/i),a.s*=this.s,(m=c.length)<(n=d.length)&&(f=c,c=d,d=f,e=m,m=n,n=e),e=m+n,f=[];e--;f.push(0));for(u=1e14,g=1e7,e=n;--e>=0;){for(j=0,s=d[e]%g,t=d[e]/g|0,l=e+(p=m);l>e;)h=c[--p]%g,r=c[p]/g|0,q=t*h+r*s,h=s*h+q%g*g+f[l]+j,j=(h/u|0)+(q/g|0)+t*r,f[l--]=h%u;f[l]=j}return j?++o:f.splice(0,1),Q(a,f,o)},a.negated=function(){var a=new b(this);return a.s=-a.s||null,a},a.plus=function(e,d){var g,j=this,c=j.s;if(d=(e=new b(e,d)).s,!c||!d)return new b(NaN);if(c!=d)return e.s=-d,j.minus(e);var l=j.e/i,h=e.e/i,a=j.c,f=e.c;if(!l||!h){if(!a||!f)return new b(c/0);if(!a[0]||!f[0])return f[0]?e:new b(a[0]?j:0*c)}if(l=k(l),h=k(h),a=a.slice(),c=l-h){for(c>0?(h=l,g=f):(c=-c,g=a),g.reverse();c--;g.push(0));g.reverse()}for((c=a.length)-(d=f.length)<0&&(g=f,f=a,a=g,d=c),c=0;d;)c=(a[--d]=a[d]+f[d]+c)/1e14|0,a[d]=1e14===a[d]?0:a[d]%1e14;return c&&(a=[c].concat(a),++h),Q(e,a,h)},a.precision=a.sd=function(c,e){var f,d,a;if(null!=c&& !!c!==c)return n(c,1,1e9),null==e?e=D:n(e,0,8),R(new b(this),c,e);if(!(f=this.c))return null;if(d=(a=f.length-1)*i+1,a=f[a]){for(;a%10==0;a/=10,d--);for(a=f[0];a>=10;a/=10,d++);}return c&&this.e+1>d&&(d=this.e+1),d},a.shiftedBy=function(a){return n(a,-9007199254740991,9007199254740991),this.times("1e"+a)},a.squareRoot=a.sqrt=function(){var m,d,c,i,e,g=this,h=g.c,a=g.s,f=g.e,j=C+4,n=new b("0.5");if(1!==a||!h||!h[0])return new b(!a||a<0&&(!h||h[0])?NaN:h?g:1/0);if(0==(a=Math.sqrt(+S(g)))||a==1/0?(((d=l(h)).length+f)%2==0&&(d+="0"),a=Math.sqrt(+d),f=k((f+1)/2)-(f<0||f%2),d=a==1/0?"5e"+f:(d=a.toExponential()).slice(0,d.indexOf("e")+1)+f,c=new b(d)):c=new b(a+""),c.c[0]){for((a=(f=c.e)+j)<3&&(a=0);;)if(e=c,c=n.times(e.plus(y(g,e,j,1))),l(e.c).slice(0,a)===(d=l(c.c)).slice(0,a)){if(c.e<f&& --a,"9999"!=(d=d.slice(a-3,a+1))&&(i||"4999"!=d)){+d&&(+d.slice(1)||"5"!=d.charAt(0))||(R(c,c.e+C+2,1),m=!c.times(c).eq(g));break}if(!i&&(R(e,e.e+C+2,0),e.times(e).eq(g))){c=e;break}j+=4,a+=4,i=1}}return R(c,c.e+C+1,D,m)},a.toExponential=function(a,b){return null!=a&&(n(a,0,1e9),a++),O(this,a,b,1)},a.toFixed=function(a,b){return null!=a&&(n(a,0,1e9),a=a+this.e+1),O(this,a,b)},a.toFormat=function(f,g,a){var i,l=this;if(null==a)null!=f&&g&&"object"==typeof g?(a=g,g=null):f&&"object"==typeof f?(a=f,f=g=null):a=L;else if("object"!=typeof a)throw Error(c+"Argument not an object: "+a);if(i=l.toFixed(f,g),l.c){var b,n=i.split("."),e=+a.groupSize,h=+a.secondaryGroupSize,o=a.groupSeparator||"",d=n[0],m=n[1],p=l.s<0,j=p?d.slice(1):d,k=j.length;if(h&&(b=e,e=h,h=b,k-=b),e>0&&k>0){for(b=k%e||e,d=j.substr(0,b);b<k;b+=e)d+=o+j.substr(b,e);h>0&&(d+=o+j.slice(b)),p&&(d="-"+d)}i=m?d+(a.decimalSeparator||"")+((h=+a.fractionGroupSize)?m.replace(new RegExp("\\d{"+h+"}\\B","g"),"$&"+(a.fractionGroupSeparator||"")):m):d}return(a.prefix||"")+i+(a.suffix||"")},a.toFraction=function(m){var f,g,h,d,n,o,a,e,k,p,r,q,s=this.c;if(null!=m&&(!(a=new b(m)).isInteger()&&(a.c||1!==a.s)||a.lt(B)))throw Error(c+"Argument "+(a.isInteger()?"out of range: ":"not an integer: ")+S(a));if(!s)return new b(this);for(f=new b(B),k=g=new b(B),h=e=new b(B),q=l(s),n=f.e=q.length-this.e-1,f.c[0]=j[(o=n%i)<0?i+o:o],m=!m||a.comparedTo(f)>0?n>0?f:k:a,o=H,H=1/0,a=new b(q),e.c[0]=0;p=y(a,f,0,1),1!=(d=g.plus(p.times(h))).comparedTo(m);)g=h,h=d,k=e.plus(p.times(d=k)),e=d,f=a.minus(p.times(d=f)),a=d;return d=y(m.minus(g),h,0,1),e=e.plus(d.times(k)),g=g.plus(d.times(h)),e.s=k.s=this.s,n*=2,r=1>y(k,h,n,D).minus(this).abs().comparedTo(y(e,g,n,D).minus(this).abs())?[k,h]:[e,g],H=o,r},a.toNumber=function(){return+S(this)},a.toPrecision=function(a,b){return null!=a&&n(a,1,1e9),O(this,a,b,2)},a.toString=function(e){var a,c=this,f=c.s,d=c.e;return null===d?f?(a="Infinity",f<0&&(a="-"+a)):a="NaN":(null==e?a=d<=E||d>=F?p(l(c.c),d):q(l(c.c),d,"0"):10===e&&N?a=q(l((c=R(new b(c),C+d+1,D)).c),c.e,"0"):(n(e,2,M.length,"Base"),a=z(q(l(c.c),d,"0"),10,e,f,!0)),f<0&&c.c[0]&&(a="-"+a)),a},a.valueOf=a.toJSON=function(){return S(this)},a._isBigNumber=!0,null!=r&&b.set(r),b}function k(a){var b=0|a;return a>0||a===b?b:b-1}function l(d){for(var a,e,f=1,b=d.length,c=d[0]+"";f<b;){for(e=i-(a=d[f++]+"").length;e--;a="0"+a);c+=a}for(b=c.length;48===c.charCodeAt(--b););return c.slice(0,b+1||1)}function m(i,j){var b,d,c=i.c,e=j.c,a=i.s,h=j.s,f=i.e,g=j.e;if(!a||!h)return null;if(b=c&&!c[0],d=e&&!e[0],b||d)return b?d?0:-h:a;if(a!=h)return a;if(b=a<0,d=f==g,!c||!e)return d?0:!c^b?1:-1;if(!d)return f>g^b?1:-1;for(a=0,h=(f=c.length)<(g=e.length)?f:g;a<h;a++)if(c[a]!=e[a])return c[a]>e[a]^b?1:-1;return f==g?0:f>g^b?1:-1}function n(a,b,d,e){if(a<b||a>d||a!==g(a))throw Error(c+(e||"Argument")+("number"==typeof a?a<b||a>d?" out of range: ":" not an integer: ":" not a primitive number: ")+String(a))}function o(a){var b=a.c.length-1;return k(a.e/i)==b&&a.c[b]%2!=0}function p(a,b){return(a.length>1?a.charAt(0)+"."+a.slice(1):a)+(b<0?"e":"e+")+b}function q(a,b,d){var e,c;if(b<0){for(c=d+".";++b;c+=d);a=c+a}else if(e=a.length,++b>e){for(c=d,b-=e;--b;c+=d);a+=c}else b<e&&(a=a.slice(0,b)+"."+a.slice(b));return a}(a=d()).default=a.BigNumber=a,"function"==typeof define&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:(b||(b="undefined"!=typeof self&&self?self:window),b.BigNumber=a)}(this)