(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{2:function(e,t,n){"use strict";(function(e,s){var o,r=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,r){function i(e){try{c(s.next(e))}catch(e){r(e)}}function a(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((s=s.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,s,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,s&&(o=2&r[0]?s.return:r[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,r[1])).done)return o;switch(s=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,s=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(6===r[0]&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=t.call(e,i)}catch(e){r=[6,e],s=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}},a=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var s=Array(e),o=0;for(t=0;t<n;t++)for(var r=arguments[t],i=0,a=r.length;i<a;i++,o++)s[o]=r[i];return s},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0,t.deriveKeys=t.COMB=t.sha256=t.Codec=t.HoloError=t.KeyManager=t.Chaperone=void 0;var h=c(n(38)),u=c(n(25)),d=n(64);t.Codec=d.Codec,t.sha256=d.sha256,t.KeyManager=d.KeyManager;var l=c(n(78)),p=n(79),g=n(86),f=n(89),m=f.HoloError,y=f.RegistrationError,w=f.HostingError,v=f.UserError;t.HoloError=m;var _=n(24),b=n(90),C="object"==typeof window&&"Window"===window.constructor.name,S=n(96).COMB;t.COMB=S;var E=e.crypto||window.crypto,A="https://resolver-scaletest.holohost.dev",O="[90mChaperone::console.log( [37m",I={"-32700":"Parse Error","-32600":"Invalid Request","-32601":"Method Not Found","-32602":"Invalid Params","-32603":"Internal Error"};var H=!1;function k(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];!0===H&&(e=P.fmtargs.apply(P,e),console.log.apply(console,e))}function R(e,t,n){return r(this,void 0,void 0,(function(){var s,o,r,a,c,h;return i(this,(function(i){switch(i.label){case 0:return s={happ_id:e,anonymous:!1,new_agent:n,date:(new Date).toISOString()},o=null,t?(o=d.Codec.AgentId.encode(t.publicKey()),r=d.Codec.Signature.encode(t.publicKey()),s.agent_id=r,k(!0===n?"User expects Resolver to have no record of this Agent (%s) encoded as (%s)":"User expects Resolver to have an existing record of this Agent (%s) encoded as (%s)",o,r)):(k("Getting Hosts for anonymous user because given no agent keys"),s.anonymous=!0),k("POST /resolve/hosts; HOST: %s; BODY: %s;",A,s),[4,fetch(A+"/resolve/hosts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})];case 1:switch((a=i.sent()).status){case 200:break;case 403:throw new v("Attempted to sign up but had already signed up");case 404:throw new v("Attempted to sign in but couldn't find agent in resolver");default:throw new m("Unhandled status response ("+a.status+") from resolver /resolve/hosts")}return[4,a.json()];case 2:if(c=i.sent(),k("Resolved hosts for Agent (%s) -> [ %s ]",o,c.hosts.map(String).join(", ")),0===c.hosts.length)throw new w("Cannot find a Host for App ("+e+") for "+(t?"Agent ("+o+")":"anonymous Agent"));return u=c.hosts,k("Randomly selected Host: %s",h=u[Math.floor(Math.random()*u.length)]),[2,h]}var u}))}))}function M(e){return r(this,void 0,void 0,(function(){var t,n;return i(this,(function(s){switch(s.label){case 0:if("string"!=typeof e)throw new Error("Bad input: hostname paramater '"+e+"' (type "+typeof e+") must be a string");return[4,fetch(A+"/resolve/happId",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})})];case 1:switch((t=s.sent()).status){case 200:break;case 404:throw new y("App Hostname ("+e+") is not registered.  Please contact Holo Support to learn about registering a hosted Holochain Application.");default:throw new m("Unhandled status response ("+t.status+") from resolver /resolve/happId")}return[4,t.json()];case 2:return n=s.sent(),k("Resolved Hostname (%s) -> HHA ID (%s)",e,n.happ_id),[2,n.happ_id]}}))}))}function D(e,t,n){return r(this,void 0,void 0,(function(){var s,o,r,a;return i(this,(function(i){switch(i.label){case 0:if(!e||!t)throw new Error("Missing parameter");return s=e.publicKey(),o=(new Date).toISOString(),r={agent_id:d.Codec.Signature.encode(s),host_id:t,date:o},[4,fetch(A+"/update/assignHost",{method:"POST",headers:{"Content-Type":"application/json",Authorization:n({message:r})},body:JSON.stringify(r)})];case 1:return[2,200===(a=i.sent()).status||a.status]}}))}))}var P=function(){function e(t){void 0===t&&(t=e.DEFAULTS),this.anonymous=!0,this.agent_overrides={},this.opened=!1,this.wormhole_ready=!1,this.wormhole_listeners={},this.pending_confirms={},this.opts=Object.assign({},e.DEFAULTS,t),this.opts.connection=Object.assign({},e.DEFAULTS.connection,t.connection),H=this.opts.debug,k("Given configuration: %s",t),k("Final configuration: %s",this.opts),this.port=this.opts.connection.port,this.mode=this.opts.mode,this.COMB=S,this.window=window,!0===this.opts.comb?this.setupCOMBListeners():k("Skipping COMB setup because 'comb' option is set to '%s'",this.opts.comb),this.initializing=this.init(this.opts.timeout)}return e.fmtargs=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return C||("string"==typeof e[0]?e[0]=O+e[0]:e.unshift(O),e.push("[90m)[0m")),e.map((function(e){if("string"!=typeof e)try{return"Object"===e.constructor.name||Array.isArray(e)?JSON.stringify(e,null,4):e}catch(e){}return e}))},e.prototype.alertParent=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return r(this,void 0,void 0,(function(){var n;return i(this,(function(s){if(!0===this.opts.comb){if(!this.parent_window)return[2];k("Emitting '%s' to parent window over message bus with %s args",e,t.length),(n=this.parent_window.msg_bus).emit.apply(n,a(["alert",e],t))}return[2]}))}))},e.prototype.sendSignal=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){return t=b.decode(s.from(e,"base64")),this.signalStore=t.data.payload,k('Chaperone received signal "'+this.signalStore+'" from envoy and is passing it via COMB'),this.parent_window&&this.parent_window.sendSignal(t),[2]}))}))},e.prototype.processCredentials=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:return k("Processing credentials based on selected behavior: %s",(t=window).expect),"signin"!==t.expect?[3,2]:[4,this.signIn(e.email,e.password)];case 1:return[2,n.sent()];case 2:return"signup"!==t.expect&&console.error(new Error("WARNING: Unknown 'expect' value ("+t.expect+")")),[4,this.signUp(e.email,e.password,e.joiningCode)];case 3:return[2,n.sent()]}}))}))},e.prototype.getCredentials=function(){var e=this;return new Promise((function(t){e.onCredentialsSubmitted((function(n){return r(e,void 0,void 0,(function(){var e;return i(this,(function(s){switch(s.label){case 0:return s.trys.push([0,,2,3]),e=t,[4,this.processCredentials(n)];case 1:return e.apply(void 0,[s.sent()]),[3,3];case 2:return window.setFormIsProcessing(!1),[7];case 3:return[2]}}))}))}))}))},e.prototype.processCOMBRequest=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return r(this,void 0,void 0,(function(){var n,s,o,r,a,c,h,u,d;return i(this,(function(i){switch(i.label){case 0:switch(this,n=window,k("Processing COMB request: %s with %s args",e,t.length),e){case"signUp":return[3,1];case"signIn":return[3,3];case"signOut":return[3,5];case"zomeCall":return[3,7];case"appInfo":return[3,12];case"stateDump":return[3,16];case"holoInfo":return[3,19]}return[3,20];case 1:return!1===this.anonymous?(k("Aborting request because we already have a derived Agent (anonymous === %s)",this.anonymous),[2,!1]):(n.showSignUp(),[4,this.getCredentials()]);case 2:return[2,i.sent()];case 3:return!1===this.anonymous?(k("Aborting request because we already have a derived Agent (anonymous === %s)",this.anonymous),[2,!1]):(n.showSignIn(),[4,this.getCredentials()]);case 4:return[2,i.sent()];case 5:return k("Sign-out was called"),!0===this.anonymous?(k("Aborting request because we are already in an anonymous state (anonymous === %s)",this.anonymous),[2,!1]):(this.window.localStorage.removeItem("seed"),[4,this.signOut()]);case 6:return[2,i.sent()];case 7:s=t[0],o=t[1],r=t[2],a=t[3],i.label=8;case 8:return i.trys.push([8,10,,11]),[4,this.callZomeFunction(s,o,r,a)];case 9:return[2,i.sent()];case 10:return[2,{type:"error",payload:{error:(c=i.sent()).name,message:c.message}}];case 11:return[3,21];case 12:return i.trys.push([12,14,,15]),[4,this.getAppInfo()];case 13:return[2,i.sent()];case 14:return[2,{type:"error",payload:{error:(h=i.sent()).name,message:h.message}}];case 15:return[3,21];case 16:return i.trys.push([16,18,,19]),u=t[0],[4,this.getHolochainStateDump(u)];case 17:return[2,i.sent()];case 18:return[2,{type:"error",payload:{error:(d=i.sent()).name,message:d.message}}];case 19:return[2,{url:this.host}];case 20:return[3,21];case 21:return[2]}}))}))},e.prototype.setupCOMBListeners=function(){return r(this,void 0,void 0,(function(){var e,t,n,s=this;return i(this,(function(o){switch(o.label){case 0:if(!this.COMB||"function"!=typeof this.COMB.connect||"function"!=typeof this.COMB.listen)throw k("Unexpected COMB library: %s (type %s)",String(this.COMB),typeof this.COMB),new Error("COMB is not the library we expected");return e={},k("Setting up COMB listeners: '%s'",(t=["signUp","signIn","signOut","zomeCall","appInfo","holoInfo","stateDump"]).join("', '")),t.map((function(t){e[t]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return r(s,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return k("Received COMB request: %s",t),[4,this.processCOMBRequest.apply(this,a([t],e))];case 1:return[2,n.sent()]}}))}))}})),n=this,[4,this.COMB.listen(e)];case 1:return n.parent_window=o.sent(),k("COMB: parent <-> child handshake is complete, message bus is ready for traffic"),[2]}}))}))},e.prototype.onCredentialsSubmitted=function(e){var t=window,n=t.$,s={$email:n("#email"),$password:n("#password")},o={$email:n("#signup-email"),$password:n("#signup-password"),$confirm:n("#signup-password-confirm"),$confirmFeedback:n("#signup-password-confirm-feedback"),$joiningCode:n("#signup-joining-code")};t.formSubmit=function(n){if(!t.formIsProcessing&&(t.setFormIsProcessing(!0),n.classList.add("has-submitted"),t.validate(n))){var r={email:null,password:null,joiningCode:null};n.matches("#sign-in form")?(r.email=s.$email.val(),r.password=s.$password.val()):n.matches("#sign-up form")&&(r.email=o.$email.val(),r.password=o.$password.val(),r.joiningCode=o.$joiningCode.val()),r.email=r.email.toLowerCase(),e(r),t.resetForms()}}},e.prototype.init=function(t){return void 0===t&&(t=5e3),r(this,void 0,void 0,(function(){var n,s,o,r,a;return i(this,(function(i){switch(i.label){case 0:return k("Initializing mode is set to: %s (%s)",this.mode,U[this.mode]),this.mode===e.HCC&&(void 0!==this.opts.web_user_legend?this.agent_overrides=this.opts.web_user_legend:void 0===this.opts.agent_id&&k("WARNING: this Chaperone has no configured users")),this.opts.agent_id?(this.agent_id=this.opts.agent_id,k("Using Agent ID (%s) assigned by Configuration '.agent_id'",this.opts.agent_id)):this.window.localStorage.getItem("seed")?(k("Found locally saved session (seed): %s",n=this.window.localStorage.getItem("seed")),this.mode===e.HCC&&n in this.agent_overrides?(this.agent_id=this.agent_overrides[n],this.anonymous=!1,k("Using Agent overrides from configuration to set Agent ID (%s)",this.agent_id)):(s=d.Codec.Digest.decode(n),this.createAgentFromSeed(s))):this.createAnonymousAgent(),this.mode!==e.DEVELOP&&this.mode!==e.HCC?[3,1]:(this.hha_hash=this.opts.app_id,k("Skipping Resolver Hostname lookup and using configured instance prefix as HHA ID: %s",this.hha_hash),[3,6]);case 1:o=this.happHost(),i.label=2;case 2:return i.trys.push([2,4,,5]),r=this,[4,M(o)];case 3:return r.hha_hash=i.sent(),[3,5];case 4:throw(a=i.sent()).message.includes("Unhandled status response")&&window.showErrorMessage("Something went wrong. Please wait 30 seconds and try again."),a;case 5:k("Using Happ ID (%s) from Resolver",this.hha_hash),i.label=6;case 6:if(this.mode===e.HCC&&void 0===this.opts.connection.host){if(!window.location.hostname)throw new Error('Unable to determine hostname "window.location.hostname" is undefined and the no host has been provided in opts.');this.opts.connection.host=window.location.hostname}return[4,this.connect(!1,t)];case 7:return i.sent(),[2]}}))}))},e.prototype.connect=function(t,n,s){return void 0===t&&(t=!1),void 0===n&&(n=5e3),void 0===s&&(s=null),r(this,void 0,void 0,(function(){var o,a,c,u,d,l,f,y,_,b,C,S,E,A,O=this;return i(this,(function(I){switch(I.label){case 0:if(k("Begin creation of an RPC WebSocket connection for %s Agent (timeout %s)",t?"new":"existing",n),delete this.cell_dictionary,!0===this.opened)throw new Error("Connection already open, must run '.disconnect()' before starting a new connection.");return this.opts.connection.host?this.mode!==e.HCC?[3,2]:(k("connecting to conductor app interface on port (%s) ",this.port),o=this,[4,p.AppWebsocket.connect("ws://localhost:"+this.port,this.sendSignal.bind(this))]):[3,4];case 1:return o.appWebsocket=I.sent(),[3,3];case 2:if(this.mode===e.PRODUCT&&"localhost"===this.opts.connection.host&&void 0===this.opts.host_agent_id)throw new Error("Cannot set 'host' to localhost without also specifying 'host_agent_id' ("+this.opts.host_agent_id+")");I.label=3;case 3:return this.host=this.opts.connection.host,k("Using Host (%s) assigned by Configuration '.connection.host'",this.host),[3,7];case 4:return I.trys.push([4,6,,7]),a=this,[4,R(this.hha_hash,!0!==this.anonymous&&this.keys,t)];case 5:return a.host=I.sent(),k("Using Host (%s) assigned by Resolver",this.host),[3,7];case 6:throw(c=I.sent())instanceof w&&c.message.includes("Cannot find a Host for App")&&window.showErrorMessage("Something went wrong. Please wait 30 seconds and try again."),c instanceof v&&c.message.includes("Attempted to sign up but had already signed up")&&window.showErrorMessage("Could not create account. If you already have an account please login."),c instanceof v&&c.message.includes("Attempted to sign in but couldn't find agent in resolver")&&window.showErrorMessage("Login failed, please check email and password or sign up if you haven't yet"),c;case 7:return u=this.host,d=this.opts.connection.path,l=!0===this.opts.connection.secure?"wss":"ws",f=l+"://"+u+":"+this.port+d+"?anonymous="+this.anonymous+"&agent_id="+encodeURIComponent(this.agent_id)+"&hha_hash="+encodeURIComponent(this.hha_hash),k("Create client to Host (%s://%s:%s%s) with connections settings: anonymous=%s agent_id=%s hha_hash=%s",l,u,this.port,d,this.anonymous,this.agent_id,this.hha_hash),this.conn=new h.default(f),this.conn.on("close",(function(){var e;k("WEBSOCKET TO ENVOY IS CLOSING. Ready state:",null===(e=O.websocket())||void 0===e?void 0:e.readyState)})),this.conn.on("error",(function(e){var t;k("WEBSOCKET TO ENVOY HAS ERROR. (%s) Ready state:",g.inspect(e),null===(t=O.websocket())||void 0===t?void 0:t.readyState)})),[4,this.conn.opened(n)];case 8:if(I.sent(),this.opened=!0,this.conn.on("open",(function(){return r(O,void 0,void 0,(function(){var n,s,o,r;return i(this,(function(i){switch(i.label){case 0:return k("WEBSOCKET TO ENVOY IS OPENING. Ready state:",null===(r=this.websocket())||void 0===r?void 0:r.readyState),this.mode===e.HCC?[3,5]:(k("Subscribing to event "+(n=this.createEventId())),this.conn.subscribe(n),[4,this.handleWormholeRequests()]);case 1:i.sent(),k("Calling '%s' because Agent wants to sign in (new_agent == %s)","holo/agent/signin",t),i.label=2;case 2:return i.trys.push([2,4,,5]),[4,this.conn.call("holo/agent/signin",[this.hha_hash,this.agent_id])];case 3:if(!0!==(s=i.sent()))throw k("Sign in returned a non-success response: %s",s),this.window.localStorage.removeItem("seed"),s;return k("Sign-in returned a success response"),this.alertParent("signin"),[3,5];case 4:throw(o=i.sent()).message.toLowerCase().includes("unknown to this host")?new m("Wrong Host.  Host "+u+" cannot locate instance of "+this.hha_hash+" app for agent "+this.agent_id):(window.showErrorMessage("Login failed, please check email and password or sign up if you haven't yet"),new m("Sign In Error: "+JSON.stringify(o)));case 5:return[2]}}))}))})),this.mode!==e.HCC&&(k("Subscribing to event "+(y=this.createEventId())),this.conn.subscribe(y),this.conn.on(y,this.sendSignal.bind(this))),this.alertParent("connected"),this.mode===e.HCC)return k("Skipping wormhole setup because we are in development mode (HCC)"),this.wormhole_ready=!0,[2];if(!1!==this.anonymous)return[3,21];I.label=9;case 9:return I.trys.push([9,19,,21]),[4,this.handleWormholeRequests()];case 10:return I.sent(),_=[this.hha_hash,this.agent_id],t?(k("Calling '%s' because Agent wants to sign-up (new_agent == %s)","holo/agent/signup",t),s&&(k("Agent (%s) is calling '%s' with joiningCode (%s) as membrane_proof",t,"holo/agent/signup",s),_.push(s)),[4,this.conn.call("holo/agent/signup",_)]):[3,14];case 11:if(!0!==(b=I.sent()))throw k("Sign-up returned a non-success response: %s",b),this.window.localStorage.removeItem("seed"),new m("Failed to sign-up");return this.mode!==e.PRODUCT?[3,13]:(k("Alerting Resolver (via /assignHost) to new Host (%s) for Agent ID (%s)",u,this.agent_id),[4,D(this.keys,u,this.getSignature.bind(this))]);case 12:if(!0!==(C=I.sent()))throw k("Resolver returned a non-success response: %s",C),new m("Failed to save assignedHost");k("Resolver successfully assigned Host (%s) to Agent (%s)",u,this.agent_id),I.label=13;case 13:return this.alertParent("signup"),[3,18];case 14:k("Calling '%s' because Agent wants to sign in (new_agent == %s)","holo/agent/signin",t),I.label=15;case 15:return I.trys.push([15,17,,18]),[4,this.conn.call("holo/agent/signin",_)];case 16:if(!0!==(S=I.sent()))throw k("Sign in returned a non-success response: %s",S),this.window.localStorage.removeItem("seed"),S;return k("Sign-in returned a success response"),this.alertParent("signin"),[3,18];case 17:throw(E=I.sent()).message.toLowerCase().includes("unknown to this host")?new m("Wrong Host.  Host "+u+" cannot locate instance of "+this.hha_hash+" app for agent "+this.agent_id):(window.showErrorMessage("Login failed, please check email and password or sign up if you haven't yet"),new m("Sign In Error: "+JSON.stringify(E)));case 18:return[3,21];case 19:return A=I.sent(),k("Sign-in/up failed with: %s",String(A)),[4,this.signOut()];case 20:throw I.sent(),A instanceof m&&A.message.includes("Failed to sign-up")&&window.showErrorMessage("Signup failed, please try again later. If the problem persists contact support."),A;case 21:return[2]}}))}))},e.prototype.disconnect=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return!1===this.opened?[2]:(k("Disconnecting from Host (%s)",this.host),this.conn.close(),[4,this.conn.closed()]);case 1:return e.sent(),k("Setting state to closed and not ready"),this.opened=!1,this.wormhole_ready=!1,this.alertParent("disconnected"),[2]}}))}))},e.prototype.ready=function(e){return void 0===e&&(e=5e3),r(this,void 0,void 0,(function(){var t,n=this;return i(this,(function(s){switch(s.label){case 0:k("Started waiting for Chaperone ready state (timeout %s)",e),s.label=1;case 1:return s.trys.push([1,,3,4]),[4,_((function(){return r(n,void 0,void 0,(function(){var e=this;return i(this,(function(n){return[2,new Promise((function(n,s){e.initializing.catch(s);var o=1;t=setInterval((function(){return r(e,void 0,void 0,(function(){var e;return i(this,(function(s){if(e=o,this.conn&&(o=2),!0===this.opened&&(o=3),!0!==this.opened||!0!==this.anonymous&&!0!==this.wormhole_ready||(o=4),o===e)return 4===e&&clearInterval(t),[2];switch(o){case 1:k("Ready state %s - Chaperone's client has not been created yet",o);break;case 2:k("Ready state %s - Client connection is incomplete (%s)",o,this.conn.readyState);break;case 3:k("Ready state %s - Wormhole is not ready",o);break;case 4:k("Ready state %s - Connection to Host (%s) is ready for App traffic",o,this.host),n(this)}return[2]}))}))}),100)}))]}))}))}),e)];case 2:return[2,s.sent()];case 3:return clearInterval(t),[7];case 4:return[2]}}))}))},e.prototype.wormholeRequest=function(e){var t=this;return new Promise((function(n,s){t.wormhole_listeners[e]=[n,s]}))},e.prototype.handleWormholeRequests=function(){return r(this,void 0,void 0,(function(){var e,t,n,s=this;return i(this,(function(o){switch(o.label){case 0:k("Begin wormhole setup for Agent %s",this.agent_id),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.conn.call("holo/wormhole/event",[this.agent_id])];case 2:return e=o.sent(),[3,4];case 3:if((t=o.sent()).message.includes("unknown to this host"))return[2,k("WARNING: this host does not know this Agent identity. Sign-up must be the next call.")];throw console.error("Error in creating wormhole event",t),new m("RPC Error: "+JSON.stringify(t));case 4:if("string"!=typeof e)throw k("Unexpected Envoy endpoint type '%s'.  Expected type 'string'",typeof e),"HoloError"===e.name?new m(e.message):new m("Unexpected response from Host: "+JSON.stringify(e));return k("Unique Envoy endpoint for signing requests: %s",e),k("Subscribe RPC WebSocket to unique endpoint (%s)",e),[4,this.conn.subscribe(e)];case 5:return o.sent(),n=function(e,t){return r(s,void 0,void 0,(function(){var n,s,o,r;return i(this,(function(i){switch(i.label){case 0:return k("WORMHOLE #%s: received message length %s",e,t.length),n=this.getSignature(t),k("WORMHOLE #%s: sending signature %s",e,n),[4,this.conn.call("holo/wormhole/response",[e,n])];case 1:return!0!==(s=i.sent())&&console.error("%s returned non-success response: %s","holo/wormhole/response",s),void 0!==this.wormhole_listeners[e]&&(k("Calling listener for wormhole #%s with signature (type %s) and data (type %s)",e,typeof n,typeof t),o=this.wormhole_listeners[e],r=o[0],o[1],r([n,t])),delete this.wormhole_listeners[e],[2]}}))}))},this.conn.listeners(e).includes(n)||(k("Attach listener for wormhole requests"),this.conn.on(e,n)),k("Wormhole setup is complete and listening for Envoy events @ %s",e),this.wormhole_ready=!0,[2]}}))}))},e.prototype.createAnonymousAgent=function(){try{this.seed=function(e){if(void 0===e&&(e=32),C){var t=new Uint8Array(e);return window.crypto.getRandomValues(t),t}return E.randomBytes(e)}(32),this.keys=new d.KeyManager(this.seed),this.agent_id=d.Codec.AgentId.encode(this.keys.publicKey()),k("Created anonymous Agent %s from random bytes",this.agent_id),this.anonymous=!0}catch(e){k("Failed to create anonymous Agent: %s",String(e)),console.error(e)}},e.prototype.createAgentFromSeed=function(e){try{this.seed=e,this.keys=new d.KeyManager(this.seed),this.agent_id=d.Codec.AgentId.encode(this.keys.publicKey()),k("Created Agent %s from stored seed (%s)",this.agent_id,e),this.anonymous=!1}catch(e){k("Failed to create Agent from seed: %s",String(e)),console.error(e)}},e.prototype.deriveAgent=function(e,t){if(k("Derive Agent from email/password (%s/******)",e),e in this.agent_overrides)return this.agent_id=this.agent_overrides[e],this.anonymous=!1,k("Used Agent overrides for email (%s) to set Agent ID (%s)",e,this.agent_id),void this.window.localStorage.setItem("seed",e);if(this.opts.agent_id)return k("Skipping derive Agent because Configuration set '.agent_id' to %s",this.opts.agent_id),void(this.anonymous=!1);try{k("Derive seed from HHA ID / email / password: %s / %s / ******",this.hha_hash,e),this.seed=s.from(d.deriveSeedFrom(d.Codec.HoloHash.decode(this.hha_hash),e,t)),this.window.localStorage.setItem("seed",d.Codec.Digest.encode(this.seed)),this.keys=new d.KeyManager(this.seed),this.agent_id=d.Codec.AgentId.encode(this.keys.publicKey()),k("Derived Agent ID: %s",this.agent_id),this.anonymous=!1}catch(e){k("Failed to create derived Agent: %s",String(e)),console.error(e)}},e.prototype.getAppInfo=function(){return r(this,void 0,void 0,(function(){var t,n;return i(this,(function(s){switch(s.label){case 0:return[4,this.ready()];case 1:return s.sent(),t=this.anonymous?this.hha_hash:this.hha_hash+":"+this.agent_id,this.mode!==e.HCC?[3,2]:[2,this.appWebsocket.appInfo({installed_app_id:this.hha_hash},5e3)];case 2:return[4,this.conn.call("holo/app_info",{installed_app_id:t})];case 3:if("success"===(n=s.sent()).type)return[2,n.payload];throw console.error("Error while calling envoy app_info: "+l.default.parse(n)),new Error("Error while calling envoy app_info: "+l.default.parse(n));case 4:return[2]}}))}))},e.prototype.populateCellData=function(){return r(this,void 0,void 0,(function(){var e,t,n,s,o,r;return i(this,(function(i){switch(i.label){case 0:return[4,this.getAppInfo()];case 1:for(e=i.sent(),this.cell_dictionary={},t=0,n=e.cell_data;t<n.length;t++)s=n[t],o=s.cell_id,r=s.cell_nick,this.cell_dictionary[r]=o;return console.log("using cell dictionary:"),console.log(this.cell_dictionary),[2]}}))}))},e.prototype.getHolochainStateDump=function(t){return r(this,void 0,void 0,(function(){var n,s;return i(this,(function(o){switch(o.label){case 0:if(this.mode!=e.HCC)return[3,1];throw new Error("state dump is not implemented for HCC mode");case 1:return n=this.anonymous?this.hha_hash:this.hha_hash+":"+this.agent_id,[4,this.conn.call("holo/tmp/state_dump",{installed_app_id:n,dna_alias:t})];case 2:if("success"===(s=o.sent()).type)return[2,s.payload];throw new Error("Error while calling envoy state_dump: "+l.default.parse(s));case 3:return[2]}}))}))},e.prototype.signUp=function(e,t,n,s){var o=(void 0===s?{}:s).timeout,a=void 0===o?5e3:o;return r(this,void 0,void 0,(function(){return i(this,(function(s){switch(s.label){case 0:return k("Sign-up with %s/****** (timeout %s)",e,a),this.deriveAgent(e,t),[4,this.disconnect()];case 1:return s.sent(),[4,this.connect(!0,a,n)];case 2:return s.sent(),[2,!1===this.anonymous]}}))}))},e.prototype.signIn=function(e,t,n){var s=(void 0===n?{}:n).timeout,o=void 0===s?5e3:s;return r(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return k("Sign-in with %s/****** (timeout %s)",e,o),this.deriveAgent(e,t),[4,this.disconnect()];case 1:return n.sent(),[4,this.connect(!1,o)];case 2:return n.sent(),[2,!1===this.anonymous]}}))}))},e.prototype.signOut=function(e){var t=(void 0===e?{}:e).timeout,n=void 0===t?5e3:t;return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return k("Sign-out current Agent %s (timeout %s)",this.agent_id,n),[4,this.disconnect()];case 1:return e.sent(),this.alertParent("signout"),this.createAnonymousAgent(),[4,this.connect(!1,n)];case 2:return e.sent(),[2,!0===this.anonymous]}}))}))},e.prototype.getCellId=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){if(!this.cell_dictionary)throw new Error("cell_data is undefined");if(!(t=this.cell_dictionary[e]))throw new Error("No cell_id corresponding with "+e);return[2,t]}))}))},e.prototype.callZomeFunction=function(t,n,o,a){return r(this,void 0,void 0,(function(){var r,c,h,u,d,p,g,f,y,w,v,_,C,S,E;return i(this,(function(i){switch(i.label){case 0:return k("Initializing zome function call: %s : %s -> %s",t,n,o),[4,this.ready()];case 1:return i.sent(),this.cell_dictionary?[3,3]:[4,this.populateCellData()];case 2:i.sent(),i.label=3;case 3:return[4,this.getCellId(t)];case 4:return r=i.sent(),k("Zome call args that chaperone gets",a),c={cell_id:r,dna_alias:t,zome:n,function:o,args:this.mode===e.HCC?a:s.from(b.encode(a)).toString("base64")},this.mode!==e.HCC?[3,6]:[4,this.localCallZome(c)];case 5:return[2,i.sent()];case 6:return c.hha_hash=this.hha_hash,k("Added timestamp (%s) and Host ID (%s) to payload",(h={timestamp:[Math.floor((new Date).getTime()/1e3),0],host_id:this.hostId(),call_spec:c}).timestamp,h.host_id),[4,this.requestServiceSignature(h)];case 7:u=i.sent(),d={anonymous:this.anonymous,agent_id:this.agent_id,payload:h,service_signature:u},k("Attached payload signature (%s) from Agent (%s)",u,this.agent_id),i.label=8;case 8:return i.trys.push([8,10,,11]),k("Sending request signature %s to Envoy",u),k("Zome call args that envoy will see",b.decode(s.from(d.payload.call_spec.args,"base64"))),[4,this.conn.call("holo/call",d)];case 9:return p=i.sent(),[3,11];case 10:throw g=i.sent(),f=void 0,console.error(g),f=g instanceof Error?String(g):void 0!==I[g.code]?I[g.code]+" ("+g.code+"): "+g.message:g.code<=-32e3&&g.code>-32100?g.message+" -> "+JSON.stringify(g.data):"'holo/call' error: Error type unknown: "+g.constructor.name,new m(f);case 11:return y=l.default.parse(p),w=y.value(),v=y.metadata("response_id"),_=y.metadata("host_response"),"error"===y.type?(k("Received error response from Envoy: %s",y),k("Forwarding on error pack to client"),[2,y]):(C=w.zomeCall_response,k("Schedule service confirmation for response (%s) initiated by request (%s)",v,u),[4,this.sendServiceConfirmation(v,_).catch((function(e){if(e instanceof Error)throw k("Received error response from Envoy: %s",e),e;k("Service confirmation failed for request %s: %s",u,String(e)),console.error(e)}))]);case 12:return"error"===(S=i.sent()).type?(k("Returning non-successful result for request to web client: %s",u),[2,S]):(E=b.decode(s.from(C,"base64")),k("Returning successful result (type %s) for request %s",typeof w,u),[2,E])}}))}))},e.prototype.localCallZome=function(e){return r(this,void 0,void 0,(function(){var t,n,s;return i(this,(function(o){switch(o.label){case 0:k("Calling Conductor directly because we are in development mode (HCC)"),t={cell_id:e.cell_id,zome_name:e.zome,fn_name:e.function,provenance:d.Codec.AgentId.decodeToHoloHash(this.agent_id),payload:e.args},o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.appWebsocket.callZome(t,5e3)];case 2:return n=o.sent(),console.log("zome call returned",n),[2,n];case 3:throw s=o.sent(),console.log("zome call errored",s),s;case 4:return[2]}}))}))},e.prototype.sendServiceConfirmation=function(e,t){return r(this,void 0,void 0,(function(){var n,s,o,r,a,c,h,u;return i(this,(function(i){switch(i.label){case 0:return this.pending_confirms[e]=!0,n=this.signPayload(t.response_hash),k("Added pending confirmation to list for response (%s) with response signature: %s",e,n),t.signed_response_hash=n,[4,this.requestDigest(t)];case 1:return s=i.sent(),o={response_digest:s,metrics:{response_received:[165303,0]}},r=this.signPayload(o),a={confirmation:o,confirmation_signature:r},k("Sending confirmation payload with response signature (%s) and confirmation signature (%s)",n,r),[4,this.conn.call("holo/service/confirm",[e,n,a])];case 2:if(c=i.sent(),delete this.pending_confirms[e],h=l.default.parse(c),u=h.value(),"error"===h.type)return k("%s returned non-success response","holo/service/confirm"),k("forwarding error response to web client: %s",h),[2,h];if(!0!==u)throw c.error&&"HoloError"===c.error.name?new Error(c.error.message):new Error(c.error);return k("Completed pending confirmation (%s)",e),[2,h]}}))}))},e.prototype.close=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.disconnect()];case 1:return e.sent(),[2]}}))}))},e.prototype.websocket=function(){return this.opened||k("WARN: Returned WebSocket is not open and may be replaced by rpc-websocket library once open"),C?this.conn.socket.socket:this.conn.socket},e.prototype.agentId=function(){if("string"!=typeof this.agent_id)throw new Error("Agend ID should be a string starting with uhCAk.  Found '"+this.agent_id+"' (type "+typeof this.agent_id+")");return!0===this.anonymous?"anonymous":this.agent_id},e.prototype.hostId=function(){if(this.opts.host_agent_id)return k("Returning Host ID (%s) assigned by Configuration '.host_agent_id'",this.opts.host_agent_id),this.opts.host_agent_id;var e=this.host.split("."),t=d.Codec.AgentId.encode(d.Codec.Base36.decode(e[0]));return k("Using Host ID (%s) found in URI subdomain (%s)",t,this.host),t},e.prototype.happHost=function(){try{var e=window.location!=window.parent.location?document.referrer:document.location.href;return k("Returing host from URL: %s",e),new URL(e).host}catch(e){k("Failed to determine App host: %s",String(e)),console.error(e)}},e.prototype.getSignature=function(e){var t;"string"==typeof e?(t=d.Codec.Signature.decode(e),k("Decoded base64 message (length %s) into bytes (length %s)",e.length,t.length)):t="Buffer"===e.type?s.from(e.data):b.encode(e);var n=this.keys.sign(t),o=d.Codec.Signature.encode(n);return k("Signature (%s) for message bytes <%s...%s>",o,t.slice(0,4).join(", "),t.slice(-4).join(", ")),o},e.prototype.requestServiceSignature=function(e){return r(this,void 0,void 0,(function(){var t,n,s;return i(this,(function(o){switch(o.label){case 0:return t=JSON.parse(JSON.stringify(e)),[4,this.requestDigest(t.call_spec.args)];case 1:return k("Added 'args' hash (%s) to call spec",n=o.sent()),k("Signing request pack: %s",s={call_spec:{args_hash:n,function:t.call_spec.function,zome:t.call_spec.zome,dna_alias:t.call_spec.dna_alias,hha_hash:t.call_spec.hha_hash},host_id:t.host_id,timestamp:t.timestamp}),[2,this.signPayload(s)]}}))}))},e.prototype.signPayload=function(e){var t;k("Serialized message and converted to bytes (length %s); data[0..10]: %s",(t=b.encode(e)).length,JSON.stringify(e).slice(0,10));var n=this.keys.sign(t);return k("Signature (%s) for message bytes <%s...%s>",n,t.slice(0,4).join(", "),t.slice(-4).join(", ")),d.Codec.Signature.encode(n)},e.prototype.requestDigest=function(e){return r(this,void 0,void 0,(function(){var t,n,o;return i(this,(function(r){switch(r.label){case 0:return t="string"==typeof e?e:u.default(e),o=(n=d.Codec.Digest).encode,[4,d.sha256(s.from(t,"utf8"))];case 1:return[2,o.apply(n,[r.sent()])]}}))}))},e.prototype.createEventId=function(){return"signal:"+this.agent_id+":"+this.hha_hash},e.PRODUCT=0,e.DEVELOP=1,e.HCC=2,e.DEFAULTS={mode:e.PRODUCT,timeout:5e3,debug:!1,comb:!0,connection:{port:4656,secure:!1,path:"/hosting/"}},e.COMB=S,e}();t.Chaperone=P;var U=((o={})[P.HCC]="HCC",o[P.DEVELOP]="DEVELOP",o[P.PRODUCT]="PRODUCT",o);t.deriveKeys=function(e,t,n){var o=s.from(d.deriveSeedFrom(d.Codec.HoloHash.decode(e),t,n));return new d.KeyManager(o)}}).call(this,n(7),n(3).Buffer)},24:function(e,t){class n extends Error{constructor(e,t,...s){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,n),this.name="TimeoutError",this.timeout=t}}function s(e,t=2e3){return new Promise(async(s,o)=>{const r=setTimeout(()=>{o(new n("Waited for "+t/1e3+" seconds",t))},t);try{s(await e())}catch(e){o(e)}finally{clearTimeout(r)}})}s.TimeoutError=n,e.exports=s},38:function(e,t,n){const s=n(39).Client,o=n(24),{TimeoutError:r}=o;e.exports=class extends s{opened(e=2e3){return o(()=>new Promise((e,t)=>this.on("open",e)),e)}closed(e=2e3){return o(()=>new Promise((e,t)=>this.on("close",()=>{e()})),e)}}},64:function(e,t,n){"use strict";(function(e){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,r){function i(e){try{c(s.next(e))}catch(e){r(e)}}function a(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((s=s.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,s,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,s&&(o=2&r[0]?s.return:r[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,r[1])).done)return o;switch(s=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,s=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(6===r[0]&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=t.call(e,i)}catch(e){r=[6,e],s=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}};t.__esModule=!0,t.deriveSeedFrom=t.KeyManager=t.sha256=t.Codec=void 0;var r=n(65);t.Codec=r.Codec,t.KeyManager=r.KeyManager,t.deriveSeedFrom=r.deriveSeedFrom;t.sha256=function(t){return s(void 0,void 0,void 0,(function(){var n,s;return o(this,(function(o){switch(o.label){case 0:return void 0!==crypto.subtle?[3,1]:[2,crypto.createHash("sha256").update(t).digest()];case 1:return s=(n=e).from,[4,crypto.subtle.digest("SHA-256",t)];case 2:return[2,s.apply(n,[o.sent()])]}}))}))}}).call(this,n(3).Buffer)},89:function(e,t){class n extends Error{constructor(...e){super(...e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name=this.constructor.name}[Symbol.toPrimitive](e){return"number"===e?null:this.toString()}toString(){return`[${this.constructor.name}( ${this.message} )]`}toJSON(e=!1){return{error:this.name,message:this.message,stack:!0===e?"string"==typeof this.stack?this.stack.split("\n"):this.stack:void 0}}}class s extends n{}e.exports={HoloError:class extends n{},AppError:s,RegistrationError:class extends s{},HostingError:class extends s{},UserError:class extends n{}}}}]);