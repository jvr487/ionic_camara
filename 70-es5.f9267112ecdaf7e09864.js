!function(){function e(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(o,i){var a=t.apply(n,r);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)})}}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{cJxf:function(e,r,o){"use strict";o.r(r),o.d(r,"pwa_camera_modal",function(){return a});var i=o("At8z"),a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object(i.h)(this,t),this.onPhoto=Object(i.d)(this,"onPhoto",7),this.noDeviceError=Object(i.d)(this,"noDeviceError",7)}var r,o,a,c,u;return r=e,o=[{key:"present",value:(u=t(regeneratorRuntime.mark(function e(){var n,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(n=document.createElement("pwa-camera-modal-instance")).addEventListener("onPhoto",function(){var e=t(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r._modal&&r.onPhoto.emit(t.detail);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),n.addEventListener("noDeviceError",function(){var e=t(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.noDeviceError.emit(t);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),document.body.append(n),this._modal=n;case 2:case"end":return e.stop()}},e,this)})),function(){return u.apply(this,arguments)})},{key:"dismiss",value:(c=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this._modal&&(this._modal&&this._modal.parentNode.removeChild(this._modal),this._modal=null);case 1:case"end":return e.stop()}},e,this)})),function(){return c.apply(this,arguments)})},{key:"render",value:function(){return Object(i.g)("div",null)}}],a=[{key:"style",get:function(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:600px;height:600px}"}}],o&&n(r.prototype,o),a&&n(r,a),e}()}}])}();