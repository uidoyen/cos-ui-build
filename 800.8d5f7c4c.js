(self.webpackChunkcos_ui=self.webpackChunkcos_ui||[]).push([[800],{35800:function(r,e,t){!function(r,e){"use strict";function t(r){if(r&&r.__esModule)return r;var e=Object.create(null);return r&&Object.keys(r).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})}})),e.default=r,Object.freeze(e)}var n=t(e);function o(r,e){return o=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r},o(r,e)}function u(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,o(r,e)}var a=function(r,e){return void 0===r&&(r=[]),void 0===e&&(e=[]),r.length!==e.length||r.some((function(r,t){return!Object.is(r,e[t])}))},i={error:null},l=function(r){function e(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r.call.apply(r,[this].concat(n))||this).state=i,e.resetErrorBoundary=function(){for(var r,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];null==e.props.onReset||(r=e.props).onReset.apply(r,n),e.reset()},e}u(e,r),e.getDerivedStateFromError=function(r){return{error:r}};var t=e.prototype;return t.reset=function(){this.setState(i)},t.componentDidCatch=function(r,e){var t,n;null==(t=(n=this.props).onError)||t.call(n,r,e)},t.componentDidUpdate=function(r,e){var t,n,o=this.state.error,u=this.props.resetKeys;null!==o&&null!==e.error&&a(r.resetKeys,u)&&(null==(t=(n=this.props).onResetKeysChange)||t.call(n,r.resetKeys,u),this.reset())},t.render=function(){var r=this.state.error,e=this.props,t=e.fallbackRender,o=e.FallbackComponent,u=e.fallback;if(null!==r){var a={error:r,resetErrorBoundary:this.resetErrorBoundary};if(n.isValidElement(u))return u;if("function"==typeof t)return t(a);if(o)return n.createElement(o,a);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},e}(n.Component);function c(r,e){var t=function(t){return n.createElement(l,e,n.createElement(r,t))},o=r.displayName||r.name||"Unknown";return t.displayName="withErrorBoundary("+o+")",t}function s(r){var e=n.useState(null),t=e[0],o=e[1];if(null!=r)throw r;if(null!=t)throw t;return o}r.ErrorBoundary=l,r.useErrorHandler=s,r.withErrorBoundary=c,Object.defineProperty(r,"__esModule",{value:!0})}(e,t(75418))}}]);
//# sourceMappingURL=800.8d5f7c4c.js.map