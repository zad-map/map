(this["webpackJsonpzad-map"]=this["webpackJsonpzad-map"]||[]).push([[0],{258:function(e,t,n){e.exports=n(495)},276:function(e,t,n){},277:function(e,t,n){},293:function(e,t){},295:function(e,t){},327:function(e,t){},328:function(e,t){},393:function(e,t){},486:function(e,t,n){},491:function(e,t,n){},492:function(e,t,n){},494:function(e,t,n){},495:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(54),c=n.n(o),i=n(48),u=n(32),l=n(71),s=n(208),d=n(138),m=n(91),p=n(212),f=n(213);n(275);d.a.use(f.a).use(p.a).use(m.a).init({backend:{loadPath:"/locales/{{lng}}.json",crossDomain:!0},fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});d.a;var O=n(90),E=n(37),b=n.n(E),v=b()("2000-01-01"),g=b()("2015-01-01");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={date:g},S={};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={loading:!1,points:[]},D=function(e){return e.map((function(e){return _({},e,{date_end:b()(e.date_end),date_start:b()(e.date_start),latitude:parseFloat(e.latitude),longitude:parseFloat(e.longitude)})}))},N=Object(i.c)({date:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATE_SET":return h({},e,{date:t.date});default:return e}},map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return t.type,e},videoPoints:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VIDEO_POINTS_REQUEST":return _({},e,{loading:!0});case"VIDEO_POINTS_RESPONSE":return _({},e,{points:D(t.data.Sheet1.elements)});case"VIDEO_POINTS_ERROR_RESPONSE":return _({},e,{error:t.error});default:return e}}}),k=(n(276),n(277),n(214)),M=n.n(k),T=function(){return function(e){e({type:"VIDEO_POINTS_REQUEST"}),M.a.init({key:"https://docs.google.com/spreadsheets/d/1JUccBmHZ2EkA5tNhmpj6fAUaOxU0dyg1eGITTYqYuiw/edit#gid=0"}).then((function(t){e({type:"VIDEO_POINTS_RESPONSE",data:t})})).catch((function(t){return e({type:"VIDEO_POINTS_ERROR_RESPONSE",error:t})}))}},I=n(39),z=n(74),R=(n(486),function(e){var t=Object(a.useState)(!1),n=Object(I.a)(t,2),o=n[0],c=n[1],i=Object(a.useRef)(null),l=Object(m.b)(),s=(l.t,l.i18n),d=Object(u.c)((function(e){return e.date.date})),p=Object(u.b)(),f=v.toDate(),O=new Date,E=z.b().domain([f,O]).range([0,1200]),g=z.c.every(1).range(f,O);return r.a.createElement("div",{className:"DatePicker"},r.a.createElement("div",{className:"DatePicker-display"},d.locale(s.language).format("MMMM YYYY")),r.a.createElement("div",{className:"DatePicker-container"},r.a.createElement("svg",{ref:i,viewBox:"0 0 ".concat(1200," ").concat(100),onMouseUp:function(){return c(!1)},onMouseLeave:function(){return c(!1)},onMouseMove:function(e){if(e.preventDefault(),o){var t=function(e){var t=i.current.getScreenCTM();return{x:(e.clientX-t.e)/t.a,y:(e.clientY-t.f)/t.d}}(e).x;p(function(e){return{date:e,type:"DATE_SET"}}(b()(E.invert(t))))}}},r.a.createElement("g",null,r.a.createElement("path",{d:z.a()([[E(f),50],[E(O),50]]),className:"timeline"})),r.a.createElement("g",null,g.map((function(e){return r.a.createElement("path",{key:e.toISOString(),d:z.a()([[E(e),25],[E(e),75]]),className:"tick"})}))),r.a.createElement("g",null,r.a.createElement("circle",{className:"current-date-marker",r:"10",cx:E(d.toDate()),cy:50,onMouseDown:function(){return c(!0)}})))))}),x=function(){return r.a.createElement(a.Suspense,{fallback:"loading"},r.a.createElement(R,null))},V=n(26),q=n(215),C=n.n(q),F=n(45),A=function(e){var t=e.onMouseEnter,n=e.onMouseLeave,a=e.onVideoSelect,o=Object(u.c)((function(e){return e.date.date})),c=Object(u.c)((function(e){return e.videoPoints.points})).filter((function(e){return o.isBetween(e.date_start,e.date_end,null,"[]")}));return r.a.createElement(V.b,{id:"videos",type:"circle",paint:{"circle-color":"#000000","circle-radius":15}},c.map((function(e){return r.a.createElement(V.a,{key:e.id,coordinates:[e.longitude,e.latitude],properties:e,onClick:function(e){return a(e.feature)},onMouseEnter:t,onMouseLeave:n})})))},L=n(216),Y=(n(491),function(e){var t=e.onClose,n=e.selectedVideo,a=n.geometry,o=n.properties,c=o.video_url.slice(o.video_url.lastIndexOf("/")+1);return r.a.createElement(V.c,{coordinates:a.coordinates,className:"VideoPopup"},r.a.createElement("header",null,o.name_en,r.a.createElement("div",{className:"btn-close",onClick:function(){return t()}},"\xd7")),r.a.createElement(L.a,{video:c,autoplay:!0}))}),Z=function(){return Object(a.useMemo)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.d,{id:"zad_raster_source",tileJsonSource:{scheme:"tms",type:"raster",tiles:["/tiles/zad-2015/{z}/{x}/{y}.png"],tileSize:256}}),r.a.createElement(V.b,{type:"raster",id:"zad_raster_layer",sourceId:"zad_raster_source",minZoom:11}))}),[])},U=(n(492),Object(V.f)({accessToken:""}));var B=function(e){var t=Object(a.useState)(null),n=Object(I.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(!1),u=Object(I.a)(i,2),l=u[0],s=u[1],d=Object(a.useState)(null),m=Object(I.a)(d,2),p=m[0],f=m[1],O=function(){var e=Object(F.d)().hash.slice(1).split("/").map(parseFloat),t=Object(I.a)(e,3),n=t[0],a=t[1],r=t[2];return n&&a&&r?{center:{lat:a,lng:r},zoom:n}:{}}();function E(e){var t=e.center,n=e.zoom,a=[];a.push(n.toFixed(1)),a.push(t.lat.toFixed(3)),a.push(t.lng.toFixed(3)),window.location.hash=a.join("/")}var b=[-1.734,47.349];o?b=o.getCenter():O.maplat&&O.maplng&&(b=[O.maplng,O.maplat]);var v=13;return o?v=o.getZoom():O.zoom&&(v=O.zoom),r.a.createElement("div",{className:C()("MapFrame",{"over-point":l})},r.a.createElement(U,{style:"https://api.maptiler.com/maps/basic/style.json?key=RTkrAcFuX6L6NwSiRn6b",onStyleLoad:c,onMoveEnd:function(e){return E({center:e.getCenter(),zoom:e.getZoom()})},onZoomEnd:function(e){return E({center:e.getCenter(),zoom:e.getZoom()})},center:b,zoom:[v]},r.a.createElement(V.e,null),r.a.createElement(Z,null),r.a.createElement(A,{onMouseEnter:function(e){return s(!0)},onMouseLeave:function(e){return s(!1)},onVideoSelect:function(e){return f(e)}}),p?r.a.createElement(Y,{onClose:function(){return f(null)},selectedVideo:p}):null))},J=(n(494),function(){return r.a.createElement("div",{className:"TextOverlay"},r.a.createElement("h1",null,"ZAD video archive"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada ullamcorper iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis quis ultrices quam. Aliquam suscipit a turpis aliquet semper."),r.a.createElement("p",null,"Nulla sodales lacus eu elit luctus, auctor feugiat quam lobortis. Sed in sodales neque. Nunc tempor non nisl a pellentesque. Nunc vel eros ac ex efficitur aliquam id nec diam. Duis iaculis augue in blandit suscipit. Nullam id sollicitudin lectus. Sed eros quam, porta vitae vehicula in, sodales luctus turpis. Nulla sem elit, cursus sit amet nulla id, euismod ornare turpis."))});var Q=function(){var e=Object(u.b)();return Object(a.useEffect)((function(){return e(T())}),[e]),r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(J,null),r.a.createElement(B,null),r.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(u.a,{store:Object(i.d)(N,Object(i.a)(s.a))},r.a.createElement(l.a,null,r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[258,1,2]]]);
//# sourceMappingURL=main.511ad3bb.chunk.js.map