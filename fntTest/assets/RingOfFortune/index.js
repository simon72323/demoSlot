System.register("chunks:///_virtual/RingOfFortune",["./RingOfFortuneBetPanel.ts","./RingOfFortuneEnum.ts","./RingOfFortuneGameMain.ts","./RingOfFortuneRoadMap.ts","./RingOfFortuneUI.ts","./RingOfFortuneWheel.ts","./RingOfFortuneWheelEffect.ts","./RingOfFortuneWinScore.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/RingOfFortuneBetPanel.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameUtil.ts","./RingOfFortuneEnum.ts","./GameAnimationManager.ts"],(function(e){"use strict";var t,i,r,n,o,c,l,a,s,u,h,S,b,B;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,c=e._decorator,l=e.EditBox,a=e.Node,s=e.Label,u=e.log,h=e.Component},function(e){S=e.GameUtil},function(e){b=e.ROFAnimation},function(e){B=e.GameAnimationManager}],execute:function(){var p,f,v,d,g,C,y,m,k,P,I,A,T,x,z,w,F,E,M,R,D;o._RF.push({},"089ae8PEqdFx6OhlrBzVnf3","RingOfFortuneBetPanel",void 0);var G=c.ccclass,O=c.property;e("RingOfFortuneBetPanel",(p=G("RingOfFortuneBetPanel"),f=O([l]),v=O([a]),d=O(a),g=O(a),C=O(a),y=O(a),m=O(a),k=O(a),P=O(s),p((T=t((A=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return t=e.call.apply(e,[this].concat(o))||this,r(t,"labelBetScore",T,n(t)),r(t,"anchorBetSelect",x,n(t)),r(t,"betSelect",z,n(t)),r(t,"betSelectMask",w,n(t)),r(t,"autoTimesSelect",F,n(t)),r(t,"stopAuto",E,n(t)),r(t,"autoBtn",M,n(t)),r(t,"closeAuto",R,n(t)),r(t,"totalBet",D,n(t)),t.onBetClickCB=null,t.betScore=[],t.selectPanelChip=[10,100,1e3,1e4],t.curBetSelectIdx=-1,t}i(t,e);var o=t.prototype;return o.onLoad=function(){this.betSelect.active=!1,this.autoTimesSelect.active=!1,this.betSelectMask.active=!1,this.betScore=[];for(var e=0;e<4;e++)this.betScore[e]=0,this.labelBetScore[e].string=S.parsePlayerBet(this.betScore[e]);this.updateTotalBet()},o.onBetClick=function(e){this.onBetClickCB&&this.onBetClickCB()},o.onEditBetScoreClick=function(e,t){var i=this,r=parseInt(t,10);u("[DEBUG] onEditBetScoreClick "+r),this.curBetSelectIdx=r,this.betSelect.active?this.betSelect.parent=this.anchorBetSelect[r]:(this.betSelect.active=!0,this.betSelect.parent=this.anchorBetSelect[r],B.instance.playAnimation(this.betSelect,b.SelectShow,(function(){i.betSelectMask.active=!0})))},o.onBetScoreChanged=function(e,t,i){var r=parseInt(i,10);u("[DEBUG] onBetScoreChanged "+r),this.betScore[r]=parseFloat(e),this.labelBetScore[r].string=S.parsePlayerBet(this.betScore[r]),this.updateTotalBet()},o.onCloseBetSelectClick=function(e){var t=this;u("[DEBUG] onCloseBetSelectClick "),B.instance.playAnimation(this.betSelect,b.SelectHide,(function(){t.betSelectMask.active=!1,t.betSelect.active=!1}))},o.onSelectPanelClick=function(e,t){for(var i=parseInt(t,10),r=0,n=0;n<4;n++)n!==this.curBetSelectIdx&&(r+=this.betScore[n]);if(i<4){var o=this.selectPanelChip[i];o+r<=1e4&&(this.betScore[this.curBetSelectIdx]=o,this.labelBetScore[this.curBetSelectIdx].string=S.parsePlayerBet(this.betScore[this.curBetSelectIdx]))}else this.betScore[this.curBetSelectIdx]=1e4-r,this.labelBetScore[this.curBetSelectIdx].string=S.parsePlayerBet(this.betScore[this.curBetSelectIdx]);this.updateTotalBet()},o.onResetClick=function(e){this.betScore=[];for(var t=0;t<4;t++)this.betScore[t]=0,this.labelBetScore[t].string=S.parsePlayerBet(this.betScore[t]),this.updateTotalBet()},o.onPlusClick=function(e,t){var i=parseInt(t,10);this.betScore[i]+1<=1e4&&(this.betScore[i]=this.betScore[i]+1,this.labelBetScore[i].string=S.parsePlayerBet(this.betScore[i]),this.updateTotalBet())},o.onAutoClick=function(e){this.autoTimesSelect.active=!0,this.closeAuto.active=!0,this.autoBtn.active=!1},o.onAutoTimesSelectClick=function(e,t){var i=parseInt(t,10);u("[DEBUG] onAutoTimeSelectClick "+i)},o.onStopAutoClick=function(e){},o.onCloseAutoClick=function(e){this.autoTimesSelect.active=!1,this.closeAuto.active=!1,this.autoBtn.active=!0},o.onMinusClick=function(e,t){var i=parseInt(t,10);this.betScore[i]=this.betScore[i]-1<1?0:this.betScore[i]-1,this.labelBetScore[i].string=S.parsePlayerBet(this.betScore[i]),this.updateTotalBet()},o.onDoubleClick=function(e,t){var i=parseInt(t,10);2*this.betScore[i]<=1e4&&(this.betScore[i]=this.betScore[i]+1,this.labelBetScore[i].string=S.parsePlayerBet(this.betScore[i]),this.updateTotalBet())},o.onHalfClick=function(e,t){var i=parseInt(t,10);this.betScore[i]<1||(this.betScore[i]=this.betScore[i]/2>1?this.betScore[i]/2:1,this.labelBetScore[i].string=S.parsePlayerBet(this.betScore[i]),this.updateTotalBet())},o.updateTotalBet=function(){var e=this.betScore.reduce((function(e,t){return e+t}));this.totalBet.string=S.parsePlayerBet(e)},t}(h)).prototype,"labelBetScore",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),x=t(A.prototype,"anchorBetSelect",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),z=t(A.prototype,"betSelect",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(A.prototype,"betSelectMask",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=t(A.prototype,"autoTimesSelect",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=t(A.prototype,"stopAuto",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=t(A.prototype,"autoBtn",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(A.prototype,"closeAuto",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(A.prototype,"totalBet",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=A))||I));o._RF.pop()}}}));

System.register("chunks:///_virtual/RingOfFortuneEnum.ts",["cc"],(function(e){"use strict";var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){var o,i;e({ROFAnimation:void 0,ROFAudio:void 0}),n._RF.push({},"2e5d8ma2eBAzr6SseagGu27","RingOfFortuneEnum",void 0),function(e){e.SelectShow="selectPanelShow",e.SelectHide="selectPanelHide",e.AddScore="addScore",e.ShowRoadMap="roadShow",e.ShowWinScore="winScoreShow"}(o||(o=e("ROFAnimation",{}))),function(e){e.BGM="ringOfFortuneBg",e.Tick="tick",e.Lose="lose",e.Win="win"}(i||(i=e("ROFAudio",{}))),n._RF.pop()}}}));

System.register("chunks:///_virtual/RingOfFortuneGameMain.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NetworkEvent.ts","./NetworkConnector.ts","./AudioController.ts","./RingOfFortuneWheel.ts","./RingOfFortuneUI.ts","./RingOfFortuneRoadMap.ts","./RingOfFortuneEnum.ts","./RingOfFortuneWinScore.ts"],(function(n){"use strict";var t,i,e,o,r,a,u,s,c,l,f,p,d,h,R;return{setters:[function(n){t=n.applyDecoratedDescriptor,i=n.inheritsLoose,e=n.initializerDefineProperty,o=n.assertThisInitialized},function(n){r=n.cclegacy,a=n._decorator,u=n.Component},function(n){s=n.NetworkEvent},function(n){c=n.NetworkConnector},function(n){l=n.AudioController},function(n){f=n.RingOfFortuneWheel},function(n){p=n.RingOfFortuneUI},function(n){d=n.RingOfFortuneRoadMap},function(n){h=n.ROFAudio},function(n){R=n.RingOfFortuneWinScore}],execute:function(){var g,M,w,F,S,b,y,O,m,v,x;r._RF.push({},"aa35255+mFOy4ASPY7753XC","RingOfFortuneGameMain",void 0);var C=a.ccclass,z=a.property;n("RingOfFortuneGameMain",(g=C("RingOfFortuneGameMain"),M=z(f),w=z(p),F=z(d),S=z(R),g((O=t((y=function(n){function t(){for(var t,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=n.call.apply(n,[this].concat(r))||this,e(t,"wheel",O,o(t)),e(t,"ui",m,o(t)),e(t,"roadMap",v,o(t)),e(t,"winScore",x,o(t)),t.idx=0,t.idxRoadMap=0,t}i(t,n);var r=t.prototype;return r.onLoad=function(){c.instance.addListener(s.RECV_MSG,this.onRecvMsg,this),this.wheel.registerSlotStopCB(this.onSlotStop.bind(this))},r.start=function(){l.instance.playMusic(h.BGM,!0),this.onInit(),this.roadMap.init([0,1,2,3,4,5])},r.onDestroy=function(){c.instance.removeAllListener(this)},r.onRecvMsg=function(n,t){},r.addRoadMap=function(){this.roadMap.addRoadMap(this.idxRoadMap),this.idxRoadMap++,5===this.idxRoadMap&&(this.idxRoadMap=0)},r.onInit=function(){this.ui.setSN("1234"),this.ui.setUserID("5678"),this.ui.setDenom("1:2"),this.ui.setBalance(1e4)},r.onBet=function(){this.wheel.startSpin(this.idx++),this.winScore.setVisible(!1)},r.onSlotStop=function(){this.winScore.setVisible(!0)},t}(u)).prototype,"wheel",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=t(y.prototype,"ui",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(y.prototype,"roadMap",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=t(y.prototype,"winScore",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=y))||b));r._RF.pop()}}}));

System.register("chunks:///_virtual/RingOfFortuneRoadMap.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameAnimationManager.ts","./RingOfFortuneEnum.ts"],(function(t){"use strict";var i,e,a,n,r,o,s,h,d,l,u,c,p;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,a=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,o=t._decorator,s=t.SpriteFrame,h=t.Sprite,d=t.find,l=t.Color,u=t.Component},function(t){c=t.GameAnimationManager},function(t){p=t.ROFAnimation}],execute:function(){var f,g,R,m,v,M,w;r._RF.push({},"6d7a4THILND6L0hVWUBld7l","RingOfFortuneRoadMap",void 0);var y=o.ccclass,F=o.property;t("RingOfFortuneRoadMap",(f=y("RingOfFortuneRoadMap"),g=F([s]),R=F([h]),f((M=i((v=function(t){function i(){for(var i,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return i=t.call.apply(t,[this].concat(r))||this,a(i,"spriteRes",M,n(i)),a(i,"roads",w,n(i)),i.head=0,i.tail=0,i.activeNum=0,i}e(i,t);var r=i.prototype;return r.onLoad=function(){for(var t=0;t<10;t++)this.roads[t]=d("roadMap_"+t,this.node).getComponent(h),this.roads[t].node.active=!1},r.init=function(t){this.head=0,this.tail=0,this.activeNum=0;for(var i=0;i<t.length;i++)this.addRoadMap(t[i])},r.addRoadMap=function(t){if(this.activeNum>=this.roads.length){this.headToTail();var i=this.head;this.head=i+1,this.head>=this.roads.length&&(this.head=0),this.tail=i,this.setTailRoadMap(t)}else this.setTailRoadMap(t),this.activeNum+=1,this.tail+=1},r.setTailRoadMap=function(t){this.roads[this.tail].spriteFrame=t?this.spriteRes[0]:this.spriteRes[1],this.roads[this.tail].color=this.getColor(t),this.roads[this.tail].node.active=!0,c.instance.playAnimation(this.roads[this.tail].node,p.ShowRoadMap,null)},r.headToTail=function(){this.activeNum>=this.roads.length&&this.roads[this.head].node.setSiblingIndex(this.roads.length-1)},r.getColor=function(t){switch(t){case 0:return new l(255,255,255,255);case 1:return new l(210,210,210,127);case 2:return new l(170,60,190,255);case 3:return new l(240,100,0,255);case 4:return new l(30,220,100,255);default:return new l(255,255,255,255)}},i}(u)).prototype,"spriteRes",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),w=i(v.prototype,"roads",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=v))||m));r._RF.pop()}}}));

System.register("chunks:///_virtual/RingOfFortuneUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameUtil.ts","./GameAnimationManager.ts","./RingOfFortuneEnum.ts"],(function(e){"use strict";var n,t,i,r,o,a,l,u,c,s,f,b;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.initializerDefineProperty,i=e.inheritsLoose,r=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,l=e.Node,u=e.Label,c=e.Component},function(e){s=e.GameUtil},function(e){f=e.GameAnimationManager},function(e){b=e.ROFAnimation}],execute:function(){var p,d,g,m,h,y,O,S,v,F,I,j,z,D,R,w,A,U,G,L;o._RF.push({},"7b691FhVTFDv5+RNkiYIcfY","RingOfFortuneUI",void 0);var _=a.ccclass,M=a.property,N=(p=_("AddScoreObj"),d=M(l),g=M(u),p((y=n((h=function(){t(this,"root",y,this),t(this,"label",O,this)}).prototype,"root",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=n(h.prototype,"label",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=h))||m);e("RingOfFortuneUI",(S=_("RingOfFortuneUI"),v=M(u),F=M(u),I=M(u),j=M(u),z=M(N),S((w=n((R=function(e){function n(){for(var n,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return n=e.call.apply(e,[this].concat(o))||this,t(n,"sn",w,r(n)),t(n,"userID",A,r(n)),t(n,"denom",U,r(n)),t(n,"balance",G,r(n)),t(n,"addScoreObj",L,r(n)),n}i(n,e);var o=n.prototype;return o.onLoad=function(){this.addScoreObj.root.active=!1},o.setSN=function(e){this.sn.string=e},o.setUserID=function(e){this.userID.string=e},o.setDenom=function(e){this.denom.string=e},o.setBalance=function(e){this.balance.string=s.parsePlayerCredit(e)},o.addScore=function(e,n){var t=this;this.addScoreObj.label.string=e.toString(),this.addScoreObj.root.active=!0,f.instance.playAnimation(this.addScoreObj.root,b.AddScore,(function(){t.addScoreObj.root.active=!1}))},n}(c)).prototype,"sn",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=n(R.prototype,"userID",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=n(R.prototype,"denom",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=n(R.prototype,"balance",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=n(R.prototype,"addScoreObj",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=R))||D));o._RF.pop()}}}));

System.register("chunks:///_virtual/RingOfFortuneWheel.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RingOfFortuneWheelEffect.ts","./AudioController.ts","./RingOfFortuneEnum.ts"],(function(t){"use strict";var e,i,n,o,l,r,a,s,u,c,h,p,f,g,C,m,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){l=t.cclegacy,r=t._decorator,a=t.CCInteger,s=t.Sprite,u=t.find,c=t.Color,h=t.log,p=t.tween,f=t.Tween,g=t.Component},function(t){C=t.RingOfFortuneWheelEffect},function(t){m=t.AudioController},function(t){d=t.ROFAudio}],execute:function(){var S,R,y,w,b,v,z,B,A,F,_,M,O,x,D;l._RF.push({},"c2130cEEuZEt5MJXCx0Fy5x","RingOfFortuneWheel",void 0);var E=r.ccclass,P=r.property;t("RingOfFortuneWheel",(S=E("RingOfFortuneWheel"),R=P({type:a,displayName:"多少個結果",tooltip:"內容數量，整數"}),y=P({type:a,displayName:"要轉的圈數",tooltip:"Spin 圈數，整數"}),w=P({type:a,displayName:"要轉的時間",tooltip:"Spin 總時間"}),b=P({displayName:"順時針選轉嗎",tooltip:"Spin 方向"}),v=P(s),z=P(C),S((F=e((A=function(t){function e(){for(var e,i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return e=t.call.apply(t,[this].concat(l))||this,n(e,"numCell",F,o(e)),n(e,"lapRotate",_,o(e)),n(e,"timeRotate",M,o(e)),n(e,"useClockwise",O,o(e)),n(e,"pointer",x,o(e)),n(e,"effect",D,o(e)),e.ringCells=[],e.aniCells=[],e.onSlotReadyStopCB=null,e.onSlotStopCB=null,e.isAllowSpin=!1,e.isRotate=!1,e.lastPos=-1,e.idx=0,e.ringColorData=[0,1,2,3,2,3,2,3,2,4,2,4,2,3,2,3,2,3,2,3,2,4,2,4,2,3,2,3,2,3,2,1],e}i(e,t);var l=e.prototype;return l.onLoad=function(){this.effect.node.active=!0,this.isAllowSpin=!0,this.lapRotate=parseInt(this.lapRotate.toString(),10),this.ringCells=[];for(var t=0;t<this.numCell;t++)this.aniCells[t]=u("animRing/ring"+t+"/ring"+t,this.node).getComponent(s),this.ringCells[t]=u("gameRing/ring"+t+"/ring"+t,this.node).getComponent(s);this.setColor()},l.update=function(t){if(this.isRotate){var e=this._normalize(this.node.angle-180),i=parseInt((this.numCell*(e/360)).toString());if(i!==this.lastPos){this.lastPos=i;var n=Math.floor(this.numCell*(e/360)),o=Math.ceil(this.numCell*(e/360));if(n!==o){var l=1-(e-n*(360/this.numCell))/(360/this.numCell),r=this.getColor(n),a=this.getColor(o),s=new c(r.r+l*(a.r-r.r),r.g+l*(a.g-r.g),r.b+l*(a.b-r.b));s.a=255,this.pointer.color=s}}}},l.test=function(){this.setPosition(this.idx);var t=this._normalize(this.node.angle-180),e=this.numCell*(t/360);this.pointer.color=this.getColor(e),this.idx++},l.registerSlotReadyStopCB=function(t){this.onSlotReadyStopCB=t},l.registerSlotStopCB=function(t){this.onSlotStopCB=t},l.setPosition=function(t){this.node.angle=-1*t*(360/this.numCell)},l.setColor=function(){for(var t=0;t<this.numCell;t++)this.aniCells[t].color=this.getColor(t),this.ringCells[t].color=this.getColor(t)},l.startSpin=function(t){var e=this;if(h("[DEBUG] startSpin "+t),this.isAllowSpin){this.isAllowSpin=!1,this.isRotate=!0,this.node.angle=this._normalize(this.node.angle);var i=this._getDistance({now:-1*this.node.angle,target:t*(360/this.numCell),extra:360*this.lapRotate});this.effect.enterSpin(),p(this.node).by(this.timeRotate,{angle:-i},{easing:"sineOut"}).call((function(){e.isAllowSpin=!0,e.isRotate=!1,e.effect.enterIdel();var t=e._normalize(e.node.angle-180),i=parseInt((e.numCell*(t/360)).toString());e.pointer.color=e.getColor(i),e.onSlotStopCB&&e.onSlotStopCB()})).start();var n={a:i/(360/this.numCell-1)},o=n.a;p(n).to(this.timeRotate,{a:0},{onUpdate:function(){Math.ceil(n.a)<o&&--o>0&&m.instance.playEffect(d.Tick)},easing:"sineOut"}).start(),setTimeout((function(){e.onSlotReadyStopCB&&e.onSlotReadyStopCB()}),1e3*(this.timeRotate-1))}},l.stop=function(){this.isAllowSpin=!0,f.stopAllByTarget(this.node)},l._getDistance=function(t){var e=t.now,i=t.target,n=0;return this.useClockwise||(0!==e&&(e=Math.abs(e-360)),i=Math.abs(i-360)),n=e>i?360-e+i:Math.abs(e-i),n+=t.extra,n=this.useClockwise?n:-1*n},l.setup=function(t){this.lapRotate=t.lap,this.timeRotate=t.time},l._normalize=function(t){var e=t<0,i=Math.abs(t);i>360&&(i-=360*Math.floor(i/360));return i=e?360-i:i},l.getColor=function(t){switch(this.ringColorData[t]){case 0:return new c(255,255,0,255);case 1:return new c(30,220,100,255);case 2:return new c(180,180,180,255);case 3:return new c(180,80,190,255);case 4:return new c(240,100,0,255);default:return new c(255,255,255,255)}},e}(g)).prototype,"numCell",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),_=e(A.prototype,"lapRotate",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),M=e(A.prototype,"timeRotate",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),O=e(A.prototype,"useClockwise",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),x=e(A.prototype,"pointer",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=e(A.prototype,"effect",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=A))||B));l._RF.pop()}}}));

System.register("chunks:///_virtual/RingOfFortuneWheelEffect.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioController.ts"],(function(e){"use strict";var i,n,t,r,a,o,s,c,l,u,h,d;return{setters:[function(e){i=e.applyDecoratedDescriptor,n=e.inheritsLoose,t=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,s=e.Node,c=e.UITransform,l=e.tween,u=e.Vec3,h=e.Component},function(e){d=e.AudioController}],execute:function(){var f,g,y,p,m;a._RF.push({},"bb9d7wm96hLwILx9hJpar0S","RingOfFortuneWheelEffect",void 0);var v=o.ccclass,R=o.property;e("RingOfFortuneWheelEffect",(f=v("RingOfFortuneWheelEffect"),g=R(s),f((m=i((p=function(e){function i(){for(var i,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=e.call.apply(e,[this].concat(a))||this,t(i,"animRing",m,r(i)),i.isAudioInit=!1,i.randomArrayPos=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],i.audioBufferSourceNode=null,i.analyser=null,i.gainNode=null,i.audioDestinationNode=null,i.checkToken=-1,i}n(i,e);var a=i.prototype;return a.onLoad=function(){this.isAudioInit=!1,this.checkToken=setInterval(this.checkMusicHasPlayed.bind(this),1e3)},a.update=function(e){if(this.isAudioInit){var i=this.analyser.fftSize,n=new Uint8Array(i);this.analyser.getByteFrequencyData(n);for(var t=n.slice(0,32),r=0;r<32;r++)this.animRing.children[this.randomArrayPos[r]].children[0].getComponent(c).height=24+t[r]*r/48}},a.enterSpin=function(){l(this.gainNode.gain).to(1,{value:-.9}).start();for(var e=0;e<this.animRing.children.length;e++)this.animRing.children[e].children[0].setScale(1,1,1),l(this.animRing.children[e].children[0]).to(1,{scale:new u(1,.1,1)},{easing:"sineOut"}).start()},a.enterIdel=function(){for(var e=0;e<this.animRing.children.length;e++)this.animRing.children[e].children[0].setScale(1,.1,1),l(this.animRing.children[e].children[0]).to(1,{scale:new u(1,1,1)},{easing:"sineOut"}).start();l(this.gainNode.gain).to(1,{value:0}).start()},a.checkMusicHasPlayed=function(){if(d.instance.getMusicPlayer()._player._sourceNode){this.randomArrayPos.sort((function(){return.5-Math.random()})),this.gainNode=d.instance.getMusicPlayer()._player._gainNode;var e=this.gainNode.context;this.analyser=e.createAnalyser(),this.analyser.fftSize=256,this.audioBufferSourceNode=d.instance.getMusicPlayer()._player._sourceNode,this.audioDestinationNode=e.destination,this.analyser.connect(this.audioDestinationNode),this.audioBufferSourceNode.connect(this.analyser),clearInterval(this.checkToken),this.animRing.active=!0,this.isAudioInit=!0}},i}(h)).prototype,"animRing",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=p))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/RingOfFortuneWinScore.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameAnimationManager.ts","./RingOfFortuneEnum.ts"],(function(t){"use strict";var n,i,e,o,r,a,c,u,l,s,p,f;return{setters:[function(t){n=t.applyDecoratedDescriptor,i=t.inheritsLoose,e=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,c=t.Node,u=t.Label,l=t.UIOpacity,s=t.Component},function(t){p=t.GameAnimationManager},function(t){f=t.ROFAnimation}],execute:function(){var g,m,y,h,b,v,F,R,d;r._RF.push({},"0fa90Xi7vFMqonQxlDm+ZxV","RingOfFortuneWinScore",void 0);var O=a.ccclass,S=a.property;t("RingOfFortuneWinScore",(g=O("RingOfFortuneWinScore"),m=S(c),y=S(u),h=S(u),g((F=n((v=function(t){function n(){for(var n,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return n=t.call.apply(t,[this].concat(r))||this,e(n,"root",F,o(n)),e(n,"score",R,o(n)),e(n,"ratio",d,o(n)),n}i(n,t);var r=n.prototype;return r.onLoad=function(){this.root.active=!1},r.setup=function(){},r.setVisible=function(t){t?(this.root.active=!0,p.instance.playAnimation(this.root,f.ShowWinScore,null)):(this.root.getComponent(l).opacity=0,this.root.active=!1)},n}(s)).prototype,"root",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=n(v.prototype,"score",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=n(v.prototype,"ratio",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=v))||b));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/RingOfFortune', 'chunks:///_virtual/RingOfFortune'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});