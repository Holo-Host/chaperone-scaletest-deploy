(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{2:function(e,t,n){"use strict";(function(e,s){var o,r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,r){function i(e){try{c(s.next(e))}catch(e){r(e)}}function a(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((s=s.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,s,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,s&&(o=2&r[0]?s.return:r[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,r[1])).done)return o;switch(s=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,s=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(6===r[0]&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=t.call(e,i)}catch(e){r=[6,e],s=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}},c=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var s=Array(e),o=0;for(t=0;t<n;t++)for(var r=arguments[t],i=0,a=r.length;i<a;i++,o++)s[o]=r[i];return s},h=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0,t.deriveKeys=t.COMB=t.sha256=t.Codec=t.HoloError=t.KeyManager=t.Chaperone=void 0;var u=h(n(37)),d=h(n(24)),l=n(64);t.Codec=l.Codec,t.sha256=l.sha256,t.KeyManager=l.KeyManager;var p=h(n(78)),g=n(79),f=n(86),m=f.HoloError,y=f.RegistrationError,v=f.HostingError;t.HoloError=m;var w=n(23),b=n(87),_="object"==typeof window&&"Window"===window.constructor.name,C=n(93).COMB;t.COMB=C;var S=e.crypto||window.crypto,A="https://resolver-scaletest.holohost.dev",E="[90mChaperone::console.log( [37m",O={"-32700":"Parse Error","-32600":"Invalid Request","-32601":"Method Not Found","-32602":"Invalid Params","-32603":"Internal Error"};var H=!1;function k(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];!0===H&&(e=P.fmtargs.apply(P,e),console.log.apply(console,e))}function I(e,t,n){return i(this,void 0,void 0,(function(){var s,o,r,i,c;return a(this,(function(a){switch(a.label){case 0:return s={happ_id:e,anonymous:!1,new_agent:n,date:(new Date).toISOString()},o=null,t?(o=l.Codec.AgentId.encode(t.publicKey()),r=l.Codec.Signature.encode(t.publicKey()),!0===n?k("User expects Resolver to have no record of this Agent (%s) encoded as (%s)",o,r):s.agent_id=r,k("User expects Resolver to have an existing record of this Agent (%s) encoded as (%s)",o,r)):(k("Getting Hosts for anonymous user because given no agent keys"),s.anonymous=!0),k("POST /resolve/hosts; HOST: %s; BODY: %s;",A,s),[4,fetch(A+"/resolve/hosts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})];case 1:return[4,a.sent().json()];case 2:if(i=a.sent(),k("Resolved hosts for Agent (%s) -> [ %s ]",o,i.hosts.map(String).join(", ")),0===i.hosts.length)throw new v("Cannot find a Host for App ("+e+") for "+(t?"Agent ("+o+")":"anonymous Agent"));return h=i.hosts,k("Randomly selected Host: %s",c=h[Math.floor(Math.random()*h.length)]),[2,c]}var h}))}))}function R(e){return i(this,void 0,void 0,(function(){var t,n;return a(this,(function(s){switch(s.label){case 0:if("string"!=typeof e)throw new Error("Bad input: hostname paramater '"+e+"' (type "+typeof e+") must be a string");return[4,fetch(A+"/resolve/happId",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})})];case 1:switch((t=s.sent()).status){case 200:break;case 404:throw new y("App Hostname ("+e+") is not registered.  Please contact Holo Support to learn about registering a hosted Holochain Application.");default:throw new m("Unhandled status response ("+t.status+") from resolver /resolve/happId")}return[4,t.json()];case 2:return n=s.sent(),k("Resolved Hostname (%s) -> HHA ID (%s)",e,n.happ_id),[2,n.happ_id]}}))}))}function D(e,t,n){return i(this,void 0,void 0,(function(){var s,o,r,i;return a(this,(function(a){switch(a.label){case 0:if(!e||!t)throw new Error("Missing parameter");return s=e.publicKey(),o=(new Date).toISOString(),r={agent_id:l.Codec.Signature.encode(s),host_id:t,date:o},[4,fetch(A+"/update/assignHost",{method:"POST",headers:{"Content-Type":"application/json",Authorization:n({message:r})},body:JSON.stringify(r)})];case 1:return[2,200===(i=a.sent()).status||i.status]}}))}))}var P=function(){function e(t){void 0===t&&(t=e.DEFAULTS),this.anonymous=!0,this.agent_overrides={},this.opened=!1,this.wormhole_ready=!1,this.wormhole_listeners={},this.pending_confirms={},this.opts=Object.assign({},e.DEFAULTS,t),this.opts.connection=Object.assign({},e.DEFAULTS.connection,t.connection),H=this.opts.debug,k("Given configuration: %s",t),k("Final configuration: %s",this.opts),this.port=this.opts.connection.port,this.mode=this.opts.mode,this.COMB=C,this.window=window,!0===this.opts.comb?this.setupCOMBListeners():k("Skipping COMB setup because 'comb' option is set to '%s'",this.opts.comb),this.initializing=this.init(this.opts.timeout)}return e.fmtargs=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return _||("string"==typeof e[0]?e[0]=E+e[0]:e.unshift(E),e.push("[90m)[0m")),e.map((function(e){if("string"!=typeof e)try{return"Object"===e.constructor.name||Array.isArray(e)?JSON.stringify(e,null,4):e}catch(e){}return e}))},e.prototype.alertParent=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return i(this,void 0,void 0,(function(){var n;return a(this,(function(s){if(!0===this.opts.comb){if(!this.parent_window)return[2];k("Emitting '%s' to parent window over message bus with %s args",e,t.length),(n=this.parent_window.msg_bus).emit.apply(n,c(["alert",e],t))}return[2]}))}))},e.prototype.sendSignal=function(e){return i(this,void 0,void 0,(function(){var t;return a(this,(function(n){return t=b.decode(s.from(e,"base64")),this.signalStore=t.data.payload,k('Chaperone received signal "'+this.signalStore+'" from envoy and is passing it via COMB'),this.parent_window&&this.parent_window.sendSignal(t),[2]}))}))},e.prototype.processCredentials=function(e){return i(this,void 0,void 0,(function(){var t;return a(this,(function(n){switch(n.label){case 0:return k("Processing credentials based on selected behavior: %s",(t=window).expect),"signin"!==t.expect?[3,2]:[4,this.signIn(e.email,e.password)];case 1:return[2,n.sent()];case 2:return"signup"!==t.expect&&console.error(new Error("WARNING: Unknown 'expect' value ("+t.expect+")")),[4,this.signUp(e.email,e.password,e.joiningCode)];case 3:return[2,n.sent()]}}))}))},e.prototype.processCOMBRequest=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return i(this,void 0,void 0,(function(){var n,s,o,r,i,c,h,u,d,l,p;return a(this,(function(a){switch(a.label){case 0:switch(n=this,s=window,k("Processing COMB request: %s with %s args",e,t.length),e){case"signUp":return[3,1];case"signIn":return[3,4];case"signOut":return[3,7];case"zomeCall":return[3,9];case"appInfo":return[3,14];case"stateDump":return[3,18];case"holoInfo":return[3,21]}return[3,22];case 1:return!1===this.anonymous?(k("Aborting request because we already have a derived Agent (anonymous === %s)",this.anonymous),[2,!1]):(s.showSignUp(),[4,this.getCredentials()]);case 2:return o=a.sent(),[4,n.processCredentials(o)];case 3:return[2,a.sent()];case 4:return!1===this.anonymous?(k("Aborting request because we already have a derived Agent (anonymous === %s)",this.anonymous),[2,!1]):(s.showSignIn(),[4,this.getCredentials()]);case 5:return o=a.sent(),[4,n.processCredentials(o)];case 6:return[2,a.sent()];case 7:return k("Sign-out was called"),!0===this.anonymous?(k("Aborting request because we are already in an anonymous state (anonymous === %s)",this.anonymous),[2,!1]):(this.window.localStorage.removeItem("seed"),[4,this.signOut()]);case 8:return[2,a.sent()];case 9:r=t[0],i=t[1],c=t[2],h=t[3],a.label=10;case 10:return a.trys.push([10,12,,13]),[4,this.callZomeFunction(r,i,c,h)];case 11:return[2,a.sent()];case 12:return[2,{type:"error",payload:{error:(u=a.sent()).name,message:u.message}}];case 13:return[3,23];case 14:return a.trys.push([14,16,,17]),[4,this.getAppInfo()];case 15:return[2,a.sent()];case 16:return[2,{type:"error",payload:{error:(d=a.sent()).name,message:d.message}}];case 17:return[3,23];case 18:return a.trys.push([18,20,,21]),l=t[0],[4,this.getHolochainStateDump(l)];case 19:return[2,a.sent()];case 20:return[2,{type:"error",payload:{error:(p=a.sent()).name,message:p.message}}];case 21:return[2,{url:this.host}];case 22:return[3,23];case 23:return[2]}}))}))},e.prototype.setupCOMBListeners=function(){return i(this,void 0,void 0,(function(){var e,t,n,s=this;return a(this,(function(o){switch(o.label){case 0:if(!this.COMB||"function"!=typeof this.COMB.connect||"function"!=typeof this.COMB.listen)throw k("Unexpected COMB library: %s (type %s)",String(this.COMB),typeof this.COMB),new Error("COMB is not the library we expected");return e={},k("Setting up COMB listeners: '%s'",(t=["signUp","signIn","signOut","zomeCall","appInfo","holoInfo"]).join("', '")),t.map((function(t){e[t]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return i(s,void 0,void 0,(function(){return a(this,(function(n){switch(n.label){case 0:return k("Received COMB request: %s",t),[4,this.processCOMBRequest.apply(this,c([t],e))];case 1:return[2,n.sent()]}}))}))}})),n=this,[4,this.COMB.listen(e)];case 1:return n.parent_window=o.sent(),k("COMB: parent <-> child handshake is complete, message bus is ready for traffic"),[2]}}))}))},e.prototype.getCredentials=function(){return i(this,void 0,void 0,(function(){var e,t,n,s,o;return a(this,(function(r){return e=window,t=e.$,n=t("#modal"),s={$email:t("#email"),$password:t("#password")},o={$email:t("#signup-email"),$password:t("#signup-password"),$confirm:t("#signup-password-confirm"),$confirmFeedback:t("#signup-password-confirm-feedback"),$joiningCode:t("#signup-joining-code")},[2,new Promise((function(t,r){e.formSubmit=function(r){if(r.classList.add("has-submitted"),e.validate(r)){var i={email:null,password:null,joiningCode:null};r.matches("#sign-in form")?(i.email=s.$email.val(),i.password=s.$password.val()):r.matches("#sign-up form")&&(i.email=o.$email.val(),i.password=o.$password.val(),i.joiningCode=o.$joiningCode.val()),t(i),n.modal("hide"),e.resetForms()}},n.modal("show")}))]}))}))},e.prototype.init=function(t){return void 0===t&&(t=5e3),i(this,void 0,void 0,(function(){var n,s,o,r;return a(this,(function(i){switch(i.label){case 0:return k("Initializing mode is set to: %s (%s)",this.mode,M[this.mode]),this.mode===e.HCC&&(void 0!==this.opts.web_user_legend?this.agent_overrides=this.opts.web_user_legend:void 0===this.opts.agent_id&&k("WARNING: this Chaperone has no configured users")),this.opts.agent_id?(this.agent_id=this.opts.agent_id,k("Using Agent ID (%s) assigned by Configuration '.agent_id'",this.opts.agent_id)):this.window.localStorage.getItem("seed")?(k("Found locally saved session (seed): %s",n=this.window.localStorage.getItem("seed")),this.mode===e.HCC&&n in this.agent_overrides?(this.agent_id=this.agent_overrides[n],this.anonymous=!1,k("Using Agent overrides from configuration to set Agent ID (%s)",this.agent_id)):(s=l.Codec.Digest.decode(n),this.createAgentFromSeed(s))):this.createAnonymousAgent(),this.mode!==e.DEVELOP&&this.mode!==e.HCC?[3,1]:(this.hha_hash=this.opts.app_id,k("Skipping Resolver Hostname lookup and using configured instance prefix as HHA ID: %s",this.hha_hash),[3,3]);case 1:return o=this.happHost(),r=this,[4,R(o)];case 2:r.hha_hash=i.sent(),k("Using Happ ID (%s) from Resolver",this.hha_hash),i.label=3;case 3:if(this.mode===e.HCC&&void 0===this.opts.connection.host){if(!window.location.hostname)throw new Error('Unable to determine hostname "window.location.hostname" is undefined and the no host has been provided in opts.');this.opts.connection.host=window.location.hostname}return[4,this.connect(!1,t)];case 4:return i.sent(),[2]}}))}))},e.prototype.connect=function(t,n,s){return void 0===t&&(t=!1),void 0===n&&(n=5e3),void 0===s&&(s=null),i(this,void 0,void 0,(function(){var o,r,c,h,d,l,p,f,y,v,w,b,_,C,S=this;return a(this,(function(A){switch(A.label){case 0:if(k("Begin creation of an RPC WebSocket connection for %s Agent (timeout %s)",t?"new":"existing",n),delete this.cell_dictionary,!0===this.opened)throw new Error("Connection already open, must run '.disconnect()' before starting a new connection.");return this.opts.connection.host?this.mode!==e.HCC?[3,2]:(k("connecting to conductor app interface on port (%s) ",this.port),o=this,[4,g.AppWebsocket.connect("ws://localhost:"+this.port,this.sendSignal.bind(this))]):[3,4];case 1:return o.appWebsocket=A.sent(),console.log("this.appWebsocket",this.appWebsocket),[3,3];case 2:if(this.mode===e.PRODUCT&&"localhost"===this.opts.connection.host&&void 0===this.opts.host_agent_id)throw new Error("Cannot set 'host' to localhost without also specifying 'host_agent_id' ("+this.opts.host_agent_id+")");A.label=3;case 3:return this.host=this.opts.connection.host,k("Using Host (%s) assigned by Configuration '.connection.host'",this.host),[3,6];case 4:return r=this,[4,I(this.hha_hash,!0!==this.anonymous&&this.keys,t)];case 5:r.host=A.sent(),k("Using Host (%s) assigned by Resolver",this.host),A.label=6;case 6:return c=this.host,h=this.opts.connection.path,d=!0===this.opts.connection.secure?"wss":"ws",l=d+"://"+c+":"+this.port+h+"?anonymous="+this.anonymous+"&agent_id="+encodeURIComponent(this.agent_id)+"&hha_hash="+encodeURIComponent(this.hha_hash),k("Create client to Host (%s://%s:%s%s) with connections settings: anonymous=%s agent_id=%s hha_hash=%s",d,c,this.port,h,this.anonymous,this.agent_id,this.hha_hash),this.conn=new u.default(l),(p=this.conn).on("close",(function(){var e;console.log("WEBSOCKET TO ENVOY IS CLOSING. Ready state:",null===(e=S.websocket())||void 0===e?void 0:e.readyState)})),p.on("open",(function(){return i(S,void 0,void 0,(function(){var t,n,s,o;return a(this,(function(r){switch(r.label){case 0:if(console.log("WEBSOCKET TO ENVOY IS OPENING. Ready state:",null===(o=this.websocket())||void 0===o?void 0:o.readyState),this.mode===e.HCC)return[3,6];k("Subscribing to event "+(t=this.createEventId())),p.subscribe(t),k("Begin wormhole setup for Agent %s",this.agent_id),n=void 0,r.label=1;case 1:return r.trys.push([1,3,,4]),[4,p.call("holo/wormhole/event",[this.agent_id])];case 2:return n=r.sent(),[3,4];case 3:if((s=r.sent()).message.includes("unknown to this host"))return[2,k("WARNING: this host does not know this Agent identity. Sign-up must be the next call.")];throw console.error("Error in creating wormhole event",s),new m("RPC Error: "+JSON.stringify(s));case 4:if("string"!=typeof n)throw k("Unexpected Envoy endpoint type '%s'.  Expected type 'string'",typeof n),"HoloError"===n.name?new m(n.message):new m("Unexpected response from Host: "+JSON.stringify(n));return k("Unique Envoy endpoint for signing requests: %s",n),k("Subscribe RPC WebSocket to unique endpoint (%s)",n),[4,p.subscribe(n)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))})),p.on("error",(function(e){var t;console.log("WEBSOCKET TO ENVOY HAS ERROR. (%s) Ready state:",e,null===(t=S.websocket())||void 0===t?void 0:t.readyState)})),[4,this.conn.opened(n)];case 7:if(A.sent(),this.opened=!0,this.mode!==e.HCC&&(k("Subscribing to event "+(f=this.createEventId())),this.conn.subscribe(f),this.conn.on(f,this.sendSignal.bind(this))),this.alertParent("connected"),this.mode===e.HCC)return k("Skipping wormhole setup because we are in development mode (HCC)"),this.wormhole_ready=!0,[2];if(!1!==this.anonymous)return[3,20];A.label=8;case 8:return A.trys.push([8,18,,20]),[4,this.handleWormholeRequests()];case 9:return A.sent(),y=[this.hha_hash,this.agent_id],t?(k("Calling '%s' because Agent wants to sign-up (new_agent == %s)","holo/agent/signup",t),s&&(k("Agent (%s) is calling '%s' with joiningCode (%s) as membrane_proof",t,"holo/agent/signup",s),y.push(s)),[4,this.conn.call("holo/agent/signup",y)]):[3,13];case 10:if(!0!==(v=A.sent()))throw k("Sign-up returned a non-success response: %s",v),new m("Failed to sign-up");return this.mode!==e.PRODUCT?[3,12]:(k("Alerting Resolver (via /assignHost) to new Host (%s) for Agent ID (%s)",c,this.agent_id),[4,D(this.keys,c,this.getSignature.bind(this))]);case 11:if(!0!==(w=A.sent()))throw k("Resolver returned a non-success response: %s",w),new m("Failed to save assignedHost");k("Resolver successfully assigned Host (%s) to Agent (%s)",c,this.agent_id),A.label=12;case 12:return this.alertParent("signup"),[3,17];case 13:k("Calling '%s' because Agent wants to sign in (new_agent == %s)","holo/agent/signin",t),A.label=14;case 14:return A.trys.push([14,16,,17]),[4,this.conn.call("holo/agent/signin",y)];case 15:if(!0!==(b=A.sent()))throw k("Sign in returned a non-success response: %s",b),b;return k("Sign-in returned a success response"),this.alertParent("signin"),[3,17];case 16:throw(_=A.sent()).message.toLowerCase().includes("unknown to this host")?new m("Wrong Host.  Host "+c+" cannot locate instance of "+this.hha_hash+" app for agent "+this.agent_id):new m("Sign In Error: "+JSON.stringify(_));case 17:return[3,20];case 18:return C=A.sent(),k("Sign-in/up failed with: %s",String(C)),[4,this.signOut()];case 19:throw A.sent(),C;case 20:return[2]}}))}))},e.prototype.disconnect=function(){return i(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return!1===this.opened?[2]:(k("Disconnecting from Host (%s)",this.host),this.conn.close(),[4,this.conn.closed()]);case 1:return e.sent(),k("Setting state to closed and not ready"),this.opened=!1,this.wormhole_ready=!1,this.alertParent("disconnected"),[2]}}))}))},e.prototype.ready=function(e){return void 0===e&&(e=5e3),i(this,void 0,void 0,(function(){var t,n=this;return a(this,(function(s){switch(s.label){case 0:k("Started waiting for Chaperone ready state (timeout %s)",e),s.label=1;case 1:return s.trys.push([1,,3,4]),[4,w((function(){return i(n,void 0,void 0,(function(){var e=this;return a(this,(function(n){return[2,new Promise((function(n,s){e.initializing.catch(s);var o=1;t=setInterval((function(){return i(e,void 0,void 0,(function(){var e;return a(this,(function(s){if(e=o,this.conn&&(o=2),!0===this.opened&&(o=3),!0!==this.opened||!0!==this.anonymous&&!0!==this.wormhole_ready||(o=4),o===e)return 4===e&&clearInterval(t),[2];switch(o){case 1:k("Ready state %s - Chaperone's client has not been created yet",o);break;case 2:k("Ready state %s - Client connection is incomplete (%s)",o,this.conn.readyState);break;case 3:k("Ready state %s - Wormhole is not ready",o);break;case 4:k("Ready state %s - Connection to Host (%s) is ready for App traffic",o,this.host),n(this)}return[2]}))}))}),100)}))]}))}))}),e)];case 2:return[2,s.sent()];case 3:return clearInterval(t),[7];case 4:return[2]}}))}))},e.prototype.wormholeRequest=function(e){var t=this;return new Promise((function(n,s){t.wormhole_listeners[e]=[n,s]}))},e.prototype.handleWormholeRequests=function(){return i(this,void 0,void 0,(function(){var e,t,n=this;return a(this,(function(s){switch(s.label){case 0:k("Begin wormhole setup for Agent %s",this.agent_id),s.label=1;case 1:return s.trys.push([1,3,,4]),[4,this.conn.call("holo/wormhole/event",[this.agent_id])];case 2:return e=s.sent(),[3,4];case 3:if((t=s.sent()).message.includes("unknown to this host"))return[2,k("WARNING: this host does not know this Agent identity. Sign-up must be the next call.")];throw console.error("Error in creating wormhole event",t),new m("RPC Error: "+JSON.stringify(t));case 4:if("string"!=typeof e)throw k("Unexpected Envoy endpoint type '%s'.  Expected type 'string'",typeof e),"HoloError"===e.name?new m(e.message):new m("Unexpected response from Host: "+JSON.stringify(e));return k("Unique Envoy endpoint for signing requests: %s",e),k("Subscribe RPC WebSocket to unique endpoint (%s)",e),[4,this.conn.subscribe(e)];case 5:return s.sent(),k("Attach listener for wormhole requests"),this.conn.on(e,(function(e,t){return i(n,void 0,void 0,(function(){var n,s,o,r;return a(this,(function(i){switch(i.label){case 0:return k("WORMHOLE #%s: received message length %s",e,t.length),n=this.getSignature(t),k("WORMHOLE #%s: sending signature %s",e,n),[4,this.conn.call("holo/wormhole/response",[e,n])];case 1:return!0!==(s=i.sent())&&console.error("%s returned non-success response: %s","holo/wormhole/response",s),void 0!==this.wormhole_listeners[e]&&(k("Calling listener for wormhole #%s with signature (type %s) and data (type %s)",e,typeof n,typeof t),o=this.wormhole_listeners[e],r=o[0],o[1],r([n,t])),delete this.wormhole_listeners[e],[2]}}))}))})),k("Wormhole setup is complete and listening for Envoy events @ %s",e),this.wormhole_ready=!0,[2]}}))}))},e.prototype.createAnonymousAgent=function(){try{this.seed=function(e){if(void 0===e&&(e=32),_){var t=new Uint8Array(e);return window.crypto.getRandomValues(t),t}return S.randomBytes(e)}(32),this.keys=new l.KeyManager(this.seed),this.agent_id=l.Codec.AgentId.encode(this.keys.publicKey()),k("Created anonymous Agent %s from random bytes",this.agent_id),this.anonymous=!0}catch(e){k("Failed to create anonymous Agent: %s",String(e)),console.error(e)}},e.prototype.createAgentFromSeed=function(e){try{this.seed=e,this.keys=new l.KeyManager(this.seed),this.agent_id=l.Codec.AgentId.encode(this.keys.publicKey()),k("Created Agent %s from stored seed (%s)",this.agent_id,e),this.anonymous=!1}catch(e){k("Failed to create Agent from seed: %s",String(e)),console.error(e)}},e.prototype.deriveAgent=function(e,t){if(k("Derive Agent from email/password (%s/******)",e),e in this.agent_overrides)return this.agent_id=this.agent_overrides[e],this.anonymous=!1,k("Used Agent overrides for email (%s) to set Agent ID (%s)",e,this.agent_id),void this.window.localStorage.setItem("seed",e);if(this.opts.agent_id)return k("Skipping derive Agent because Configuration set '.agent_id' to %s",this.opts.agent_id),void(this.anonymous=!1);try{k("Derive seed from HHA ID / email / password: %s / %s / ******",this.hha_hash,e),this.seed=s.from(l.deriveSeedFrom(l.Codec.HoloHash.decode(this.hha_hash),e,t)),this.window.localStorage.setItem("seed",l.Codec.Digest.encode(this.seed)),this.keys=new l.KeyManager(this.seed),this.agent_id=l.Codec.AgentId.encode(this.keys.publicKey()),k("Derived Agent ID: %s",this.agent_id),this.anonymous=!1}catch(e){k("Failed to create derived Agent: %s",String(e)),console.error(e)}},e.prototype.getAppInfo=function(){return i(this,void 0,void 0,(function(){var t,n;return a(this,(function(s){switch(s.label){case 0:return[4,this.ready()];case 1:return s.sent(),t=this.anonymous?this.hha_hash:this.hha_hash+":"+this.agent_id,this.mode!==e.HCC?[3,2]:[2,this.appWebsocket.appInfo({installed_app_id:this.hha_hash})];case 2:return[4,this.conn.call("holo/app_info",{installed_app_id:t})];case 3:if("success"===(n=s.sent()).type)return[2,n.payload];throw new Error("Error while calling envoy app_info: "+p.default.parse(n));case 4:return[2]}}))}))},e.prototype.populateCellData=function(){return i(this,void 0,void 0,(function(){var e,t,n,s;return a(this,(function(o){switch(o.label){case 0:return[4,this.getAppInfo()];case 1:return e=o.sent(),t=e.cell_data,n=t.map((function(e){var t,n=e[0];return(t={})[e[1]]=n,t})),s=n.reduce((function(e,t,n){return r(r({},e),t[0])})),this.cell_dictionary=s,[2,s]}}))}))},e.prototype.getHolochainStateDump=function(t){return i(this,void 0,void 0,(function(){var n,s;return a(this,(function(o){switch(o.label){case 0:if(this.mode!=e.HCC)return[3,1];throw new Error("state dump is not implemented for HCC mode");case 1:return n=this.anonymous?this.hha_hash:this.hha_hash+":"+this.agent_id,[4,this.conn.call("holo/tmp/state_dump",{installed_app_id:n,dna_alias:t})];case 2:if("success"===(s=o.sent()).type)return[2,s.payload];throw new Error("Error while calling envoy state_dump: "+p.default.parse(s));case 3:return[2]}}))}))},e.prototype.signUp=function(e,t,n,s){var o=(void 0===s?{}:s).timeout,r=void 0===o?5e3:o;return i(this,void 0,void 0,(function(){return a(this,(function(s){switch(s.label){case 0:return k("Sign-up with %s/****** (timeout %s)",e,r),this.deriveAgent(e,t),[4,this.disconnect()];case 1:return s.sent(),[4,this.connect(!0,r,n)];case 2:return s.sent(),[2,!1===this.anonymous]}}))}))},e.prototype.signIn=function(e,t,n){var s=(void 0===n?{}:n).timeout,o=void 0===s?5e3:s;return i(this,void 0,void 0,(function(){return a(this,(function(n){switch(n.label){case 0:return k("Sign-in with %s/****** (timeout %s)",e,o),this.deriveAgent(e,t),[4,this.disconnect()];case 1:return n.sent(),[4,this.connect(!1,o)];case 2:return n.sent(),[2,!1===this.anonymous]}}))}))},e.prototype.signOut=function(e){var t=(void 0===e?{}:e).timeout,n=void 0===t?5e3:t;return i(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return k("Sign-out current Agent %s (timeout %s)",this.agent_id,n),[4,this.disconnect()];case 1:return e.sent(),this.alertParent("signout"),this.createAnonymousAgent(),[4,this.connect(!1,n)];case 2:return e.sent(),[2,!0===this.anonymous]}}))}))},e.prototype.getCellId=function(e){return i(this,void 0,void 0,(function(){var t;return a(this,(function(n){if(!this.cell_dictionary)throw new Error("cell_data is undefined");if(!(t=this.cell_dictionary[e]))throw new Error("No cell_id corresponding with "+e);return[2,t]}))}))},e.prototype.callZomeFunction=function(t,n,o,r){return i(this,void 0,void 0,(function(){var i,c,h,u,d,l,g,f,y,v,w,_,C,S,A;return a(this,(function(a){switch(a.label){case 0:return k("Initializing zome function call: %s : %s -> %s",t,n,o),[4,this.ready()];case 1:return a.sent(),this.cell_dictionary?[3,3]:[4,this.populateCellData()];case 2:a.sent(),a.label=3;case 3:return[4,this.getCellId(t)];case 4:return i=a.sent(),k("Zome call args that chaperone gets",r),c={cell_id:i,dna_alias:t,zome:n,function:o,args:this.mode===e.HCC?r:s.from(b.encode(r)).toString("base64")},this.mode!==e.HCC?[3,6]:[4,this.localCallZome(c)];case 5:return[2,a.sent()];case 6:return c.hha_hash=this.hha_hash,k("Added timestamp (%s) and Host ID (%s) to payload",(h={timestamp:[Math.floor((new Date).getTime()/1e3),0],host_id:this.hostId(),call_spec:c}).timestamp,h.host_id),[4,this.requestServiceSignature(h)];case 7:u=a.sent(),d={anonymous:this.anonymous,agent_id:this.agent_id,payload:h,service_signature:u},k("Attached payload signature (%s) from Agent (%s)",u,this.agent_id),a.label=8;case 8:return a.trys.push([8,10,,11]),k("Sending request signature %s to Envoy",u),k("Zome call args that envoy will see",b.decode(s.from(d.payload.call_spec.args,"base64"))),[4,this.conn.call("holo/call",d)];case 9:return l=a.sent(),[3,11];case 10:throw g=a.sent(),f=void 0,console.error(g),f=g instanceof Error?String(g):void 0!==O[g.code]?O[g.code]+" ("+g.code+"): "+g.message:g.code<=-32e3&&g.code>-32100?g.message+" -> "+JSON.stringify(g.data):"'holo/call' error: Error type unknown: "+g.constructor.name,new m(f);case 11:return y=p.default.parse(l),v=y.value(),w=y.metadata("response_id"),_=y.metadata("host_response"),"error"===y.type?(k("Received error response from Envoy: %s",y),k("Forwarding on error pack to client"),[2,y]):(C=v.zomeCall_response,k("Schedule service confirmation for response (%s) initiated by request (%s)",w,u),[4,this.sendServiceConfirmation(w,_).catch((function(e){if(e instanceof Error)throw k("Received error response from Envoy: %s",e),e;k("Service confirmation failed for request %s: %s",u,String(e)),console.error(e)}))]);case 12:return"error"===(S=a.sent()).type?(k("Returning non-successful result for request to web client: %s",u),[2,S]):(A=b.decode(s.from(C,"base64")),k("Returning successful result (type %s) for request %s",typeof v,u),[2,A])}}))}))},e.prototype.localCallZome=function(e){return i(this,void 0,void 0,(function(){var t,n,s;return a(this,(function(o){switch(o.label){case 0:k("Calling Conductor directly because we are in development mode (HCC)"),t={cell_id:e.cell_id,zome_name:e.zome,fn_name:e.function,provenance:l.Codec.AgentId.decodeToHoloHash(this.agent_id),payload:e.args},o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.appWebsocket.callZome(t)];case 2:return n=o.sent(),console.log("zome call returned",n),[2,n];case 3:throw s=o.sent(),console.log("zome call errored",s),s;case 4:return[2]}}))}))},e.prototype.sendServiceConfirmation=function(e,t){return i(this,void 0,void 0,(function(){var n,s,o,r,i,c,h,u;return a(this,(function(a){switch(a.label){case 0:return this.pending_confirms[e]=!0,n=this.signPayload(t.response_hash),k("Added pending confirmation to list for response (%s) with response signature: %s",e,n),t.signed_response_hash=n,s=this.requestDigest(t),o={response_digest:s,metrics:{response_received:[165303,0]}},r=this.signPayload(o),i={confirmation:o,confirmation_signature:r},k("Sending confirmation payload with response signature (%s) and confirmation signature (%s)",n,r),[4,this.conn.call("holo/service/confirm",[e,n,i])];case 1:if(c=a.sent(),delete this.pending_confirms[e],h=p.default.parse(c),u=h.value(),"error"===h.type)return k("%s returned non-success response","holo/service/confirm"),k("forwarding error response to web client: %s",h),[2,h];if(!0!==u)throw c.error&&"HoloError"===c.error.name?new Error(c.error.message):new Error(c.error);return k("Completed pending confirmation (%s)",e),[2,h]}}))}))},e.prototype.close=function(){return i(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return[4,this.disconnect()];case 1:return e.sent(),[2]}}))}))},e.prototype.websocket=function(){return this.opened||k("WARN: Returned WebSocket is not open and may be replaced by rpc-websocket library once open"),_?this.conn.socket.socket:this.conn.socket},e.prototype.agentId=function(){if("string"!=typeof this.agent_id)throw new Error("Agend ID should be a string starting with uhCAk.  Found '"+this.agent_id+"' (type "+typeof this.agent_id+")");return!0===this.anonymous?"anonymous":this.agent_id},e.prototype.hostId=function(){if(this.opts.host_agent_id)return k("Returning Host ID (%s) assigned by Configuration '.host_agent_id'",this.opts.host_agent_id),this.opts.host_agent_id;var e=this.host.split("."),t=l.Codec.AgentId.encode(l.Codec.Base36.decode(e[0]));return k("Using Host ID (%s) found in URI subdomain (%s)",t,this.host),t},e.prototype.happHost=function(){try{var e=window.location!=window.parent.location?document.referrer:document.location.href;return k("Returing host from URL: %s",e),new URL(e).host}catch(e){k("Failed to determine App host: %s",String(e)),console.error(e)}},e.prototype.getSignature=function(e){var t;"string"==typeof e?(t=l.Codec.Signature.decode(e),k("Decoded base64 message (length %s) into bytes (length %s)",e.length,t.length)):t="Buffer"===e.type?s.from(e.data):b.encode(e);var n=this.keys.sign(t),o=l.Codec.Signature.encode(n);return k("Signature (%s) for message bytes <%s...%s>",o,t.slice(0,4).join(", "),t.slice(-4).join(", ")),o},e.prototype.requestServiceSignature=function(e){return i(this,void 0,void 0,(function(){var t,n,s;return a(this,(function(o){return t=JSON.parse(JSON.stringify(e)),k("Added 'args' hash (%s) to call spec",n=this.requestDigest(t.call_spec.args)),k("Signing request pack: %s",s={call_spec:{args_hash:n,function:t.call_spec.function,zome:t.call_spec.zome,dna_alias:t.call_spec.dna_alias,hha_hash:t.call_spec.hha_hash},host_id:t.host_id,timestamp:t.timestamp}),[2,this.signPayload(s)]}))}))},e.prototype.signPayload=function(e){var t;k("Serialized message and converted to bytes (length %s); data[0..10]: %s",(t=b.encode(e)).length,String(e).slice(0,10));var n=this.keys.sign(t);return k("Signature (%s) for message bytes <%s...%s>",n,t.slice(0,4).join(", "),t.slice(-4).join(", ")),l.Codec.Signature.encode(n)},e.prototype.requestDigest=function(e){var t="string"==typeof e?e:d.default(e),n=s.from(t);return l.Codec.Digest.encode(n)},e.prototype.createEventId=function(){return"signal:"+this.agent_id+":"+this.hha_hash},e.PRODUCT=0,e.DEVELOP=1,e.HCC=2,e.DEFAULTS={mode:e.PRODUCT,timeout:5e3,debug:!1,comb:!0,connection:{port:4656,secure:!1,path:"/hosting/"}},e.COMB=C,e}();t.Chaperone=P;var M=((o={})[P.HCC]="HCC",o[P.DEVELOP]="DEVELOP",o[P.PRODUCT]="PRODUCT",o);t.deriveKeys=function(e,t,n){var o=s.from(l.deriveSeedFrom(l.Codec.HoloHash.decode(e),t,n));return new l.KeyManager(o)}}).call(this,n(7),n(3).Buffer)},23:function(e,t){class n extends Error{constructor(e,t,...s){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,n),this.name="TimeoutError",this.timeout=t}}function s(e,t=2e3){return new Promise(async(s,o)=>{const r=setTimeout(()=>{o(new n("Waited for "+t/1e3+" seconds",t))},t);try{s(await e())}catch(e){o(e)}finally{clearTimeout(r)}})}s.TimeoutError=n,e.exports=s},37:function(e,t,n){const s=n(38).Client,o=n(23),{TimeoutError:r}=o;e.exports=class extends s{opened(e=2e3){return o(()=>new Promise((e,t)=>this.on("open",e)),e)}closed(e=2e3){return o(()=>new Promise((e,t)=>this.on("close",()=>{e()})),e)}}},64:function(e,t,n){"use strict";(function(e){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,r){function i(e){try{c(s.next(e))}catch(e){r(e)}}function a(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((s=s.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,s,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,s&&(o=2&r[0]?s.return:r[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,r[1])).done)return o;switch(s=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,s=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(6===r[0]&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=t.call(e,i)}catch(e){r=[6,e],s=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}};t.__esModule=!0,t.deriveSeedFrom=t.KeyManager=t.sha256=t.Codec=void 0;var r=n(65);t.Codec=r.Codec,t.KeyManager=r.KeyManager,t.deriveSeedFrom=r.deriveSeedFrom;t.sha256=function(t){return s(void 0,void 0,void 0,(function(){var n,s;return o(this,(function(o){switch(o.label){case 0:return void 0!==crypto.subtle?[3,1]:[2,crypto.createHash("sha256").update(e.from(t)).digest()];case 1:return s=(n=e).from,[4,crypto.subtle.digest("SHA-256",e.from(t))];case 2:return[2,s.apply(n,[o.sent()])]}}))}))}}).call(this,n(3).Buffer)},86:function(e,t){class n extends Error{constructor(...e){super(...e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name=this.constructor.name}[Symbol.toPrimitive](e){return"number"===e?null:this.toString()}toString(){return`[${this.constructor.name}( ${this.message} )]`}toJSON(e=!1){return{error:this.name,message:this.message,stack:!0===e?"string"==typeof this.stack?this.stack.split("\n"):this.stack:void 0}}}class s extends n{}e.exports={HoloError:class extends n{},AppError:s,RegistrationError:class extends s{},HostingError:class extends s{}}}}]);