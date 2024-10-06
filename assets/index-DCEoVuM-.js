(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const B of o)if(B.type==="childList")for(const g of B.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function s(o){const B={};return o.integrity&&(B.integrity=o.integrity),o.referrerPolicy&&(B.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?B.credentials="include":o.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function n(o){if(o.ep)return;o.ep=!0;const B=s(o);fetch(o.href,B)}})();const f=1280,z=720,Y=Object.freeze({SKY:"#1F1F29",WATER:"#596070",SEABED:"#413A42",WHITE:"#FFFFFF"}),r=16,Z=1.5,m=.5,h=document.getElementById("canvas");if(!(h instanceof HTMLCanvasElement))throw new Error("Missing canvas element");h.width=f;h.height=z;const p=h.getContext("2d");if(!p)throw new Error("Missing context");p.webkitImageSmoothingEnabled=!1;p.mozImageSmoothingEnabled=!1;p.imageSmoothingEnabled=!1;const U=h,e=p,b=(A,t)=>Math.random()*(t-A+1)+A,l={debris:new URL("/assets/debris-Cm6IKwfu.png",import.meta.url),ships:new URL("data:image/png;base64,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",import.meta.url),creatures:new URL("data:image/png;base64,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",import.meta.url),seabed:new URL("data:image/png;base64,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wgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAACyvn37D3d+v9XSvxP+AAAAAElFTkSuQmCC",import.meta.url),nightsky:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAAC0BAMAAAA5qZwAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASUExURR8fKZGVh8TJturw2M3Qx56en1kSVKcAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAKPSURBVHja7d2BbdtAEARAqoP4O4jTQdRCCkj/1SSAAcOQKfEt63751EwJ9mrvj6LIBQAAAAAAAAAAAACAu51efywASaeXBeA4XpytmF98NvscFfGHBTgUyzQAAPBcqrYg29UKVxKB+6hUAGA2p1/n/37bgUho53c/FxjrQ/xE8JILY+Uu8ieBDPUpfxLIOG/LxyXLCIO08yodyBBX8jdzAn0hNpH1AWwIM8jVAjSEGeBG/iSQctcHsCF8OHu8oH6zAFVgJZvSslWAKpBiGwWoAim1VYAqkFKbBagCqSSAkzrIDWLbE9gMplBHAapAyvQUoAqkjAAS1TWBzWCK9BXgVypw9G7mx0JTufzu8fEBHE0ApzZ/AJla5xHQIZAaAkhS7wQ2gykhgER1T2AzmAoCSJQAErWzALqo/GT6dxBbCAUEkCgBJEoAiRJA+hWsiF9Ygl2H4fEEkCgBJEoAd+341+UFkCgBJEoAiRJAop4tgO622RkNSJQAEiWA9zu9muff5maEI5ro1Q8CSNQ3Amih5Ps0IFECuMr7s4bxu2CiBJAHuW9sCCBRIwNob+YTj2cjSgDJ8oheogRwgNOfvwvrvKZhADfOXCeARAkgWV5WSJTXtRIlgGR5ZT9RPRWoAKnTFCBJAki3ipvFt2ewCUylpgBJ2qpABUitpgBJul2BCpBqTQES1eSPpOtDODWAPZ3guTQFSFSTP5LWh7ANmGGa/ju23R+rm/wR1ebKn0X5eJr6I+ttGbF8DOBxYUzGoYPjkm4A4C62OgCAXXJMAwDgqJx1AQCAdTPcBWmjAQAAoJjVE6CapgUAAAAAAAAAAIZy0xIfzfBrWu89OTD/XACYgRUCeDjFEmQPAwCAvVmWf0KPfjFaMWLxAAAAAElFTkSuQmCC",import.meta.url),water:new URL("data:image/png;base64,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",import.meta.url)},K=new Image,j=new Image,N=new Image,X=new Image,y=new Image,V=new Image;K.src=l.debris.toString();j.src=l.ships.toString();N.src=l.creatures.toString();X.src=l.seabed.toString();y.src=l.nightsky.toString();V.src=l.water.toString();const P={water:{coords:[0,z*.25,f,z*.85],color:Y.WATER},sky:{coords:[0,0,f,z*.25],color:Y.SKY},seabed:{coords:[0,z*.85,f,z],color:Y.SEABED}},J=()=>{e.fillStyle=Y.SKY,e.fillRect(0,0,f,z),e.drawImage(V,...P.water.coords),e.fillStyle=P.sky.color,e.fillRect(...P.sky.coords),e.drawImage(y,0,0,f,180),e.fillStyle=P.seabed.color,e.fillRect(...P.seabed.coords),e.drawImage(X,0,z-230,f,300)},$=A=>({...A,type:"TRASH",radius:10,vel:[A.vel[0],100],value:Math.floor(b(0,5))}),_=A=>({...A,type:"CRATE",radius:r/2*A.scale,vel:[A.vel[0],200],value:Math.floor(b(0,5)),texture:{...A.texture,offset:[A.texture.offset[0],1]}}),AA=new URL("/assets/mixkit-metal-tools-box-browsing-3202-BXlCosHG.wav",import.meta.url),eA=()=>{const A=new Audio(AA.toString());A.load(),A.play()},tA=A=>({...A,type:"BARREL",radius:15,blastRadius:30,vel:[A.vel[0],400],texture:{...A.texture,offset:[A.texture.offset[0],2]}}),sA=4,aA=20,M=new Set,rA=()=>{for(const A of M)A.acc++,A.acc>=aA&&(A.frame++,A.acc=0),A.frame>=sA&&M.delete(A),e.save(),e.translate(...A.pos),e.scale(A.scale,A.scale),e.drawImage(K,r*A.frame+m,r*3+m,r-m*2,r-m*2,-r*.5,-r*.5,r,r),e.restore()},uA=new URL("/assets/mixkit-arcade-game-explosion-2759-DN3IRX5G.wav",import.meta.url),v=(A,t,s)=>{const n=new Audio(uA.toString());n.load(),n.play(),M.add({pos:A,radius:t,scale:s,acc:0,frame:0})},Q=(A,t,s,n)=>{const o=s-A,B=n-t;return Math.sqrt(o*o+B+B)},oA=3,C=[[0,1,2],[0]],mA=()=>{const A=b(1,2);return{pos:[Math.floor(b(0,f)),Math.floor(b(z*.9,z-r))],vel:[b(50,200),0],scale:A,radius:A*8,acc:0,frame:0,frameLength:b(20,30),closestDebris:null}},i=new Set,q=()=>{i.clear();const A=new Array(15).fill(null).map(()=>mA());A.sort((t,s)=>s.scale-t.scale),A.map(t=>{i.add(t)})};q();const nA=A=>{let t=null;for(const s of d){t||(t=s);const n=Q(...A.pos,...s.pos),o=Q(...A.pos,...t.pos);n<=o&&(t=s)}return t},BA=A=>{for(const t of i)t.pos[0]+=t.vel[0]*A,t.pos[1]+=t.vel[1]*A,t.pos[0]<0&&(t.pos[0]=0,t.vel[0]*=-1),t.pos[0]>f&&(t.pos[0]=f,t.vel[0]*=-1)};setInterval(()=>{for(const A of i)if(A.closestDebris=nA(A),A.closestDebris&&A.closestDebris.type==="TRASH"){const t=A.closestDebris.pos[0]<A.pos[0]?-1:1;A.vel[0]=Math.abs(A.vel[0])*t}},5e3);const fA=()=>{for(const A of i)A.acc++,A.acc>=A.frameLength&&(A.frame++,A.acc=0),A.frame>=oA&&(A.frame=0),e.save(),e.translate(...A.pos),e.scale(A.vel[0]<0?A.scale:-A.scale,A.scale),e.drawImage(N,C[0][A.frame]*r+m,C[1][0]*r+m,r-m*2,r-m*2,-r*.5,-r*.5,r,r),e.restore(),e.save(),e.translate(...A.pos),e.fillStyle=Y.SKY,e.beginPath(),e.ellipse(0,A.radius,A.radius,A.radius*.1,0,0,2*Math.PI),e.fill(),e.restore(),u.mode==="DEBUG"&&(e.save(),e.translate(...A.pos),e.strokeStyle="#FFFF00",e.beginPath(),e.arc(0,0,A.radius,0,2*Math.PI),e.stroke(),e.restore(),A.closestDebris&&d.has(A.closestDebris)&&(e.strokeStyle="#FF0000",e.beginPath(),e.moveTo(...A.pos),e.lineTo(...A.closestDebris.pos),e.stroke()))},R=[600,300],F=new Image,dA=new URL("data:image/png;base64,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7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBmfZ6Phe3Q5hB21y+Kadbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbn+VjYDm0OYXf9ophm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBmfZ6Phe3Q5hB21y+Kadbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbn+VjYDm0OYXf9ophm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBmfZ6Phe3Q5hB21y+Kadbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbn+VjYDm0OYXf9ophm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBmfZ6Phe3Q5hB21y+Kadbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbn+VjYDm0OYXf9ophm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBmfZ6Phe3Q5hB21y+Kadbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbn+VjYDm0OYXf9ophm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBmfZ6Phe3Q5hB21y+Kadbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbn+VjYDm0OYXf9ophm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBmfZ6Phe3Q5hB21y+Kadbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbn+VjYDm0OYXf9ophm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBmfZ6Phe3Q5hB21y+Kadbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbn+VjYDm0OYXf9ophm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBm7Y4Patbu+KBmfZ6Phe3Ivn37L8GGnDkX5ZAOAAAAAElFTkSuQmCC",import.meta.url);F.src=dA.toString();const a={health:1,pos:[f/2,z/2],vel:[-R[0],R[1]],radius:24,torpedoCount:5,texture:{offset:[0*r,0*r],size:[3*r,2*r]}},bA=A=>{a.pos[0]+=a.vel[0]*A,a.pos[1]+=a.vel[1]*A,a.pos[0]<a.radius&&(a.pos[0]=a.radius),a.pos[0]>f-a.radius&&(a.pos[0]=f-a.radius),a.pos[1]<P.water.coords[1]+50&&(a.pos[1]=P.water.coords[1]+50),a.pos[1]>P.water.coords[3]-100&&(a.pos[1]=P.water.coords[3]-100)},zA=()=>{e.save(),e.translate(...a.pos);const A=[a.vel[0]<0?Z:-Z,Z];e.scale(...A),e.drawImage(F,a.texture.offset[0]+m,a.texture.offset[1]+m,a.texture.size[0]-m*2,a.texture.size[1]-m*2,-a.texture.size[0]*.5,-a.texture.size[1]*.5,a.texture.size[0],a.texture.size[1]),e.restore(),u.mode==="DEBUG"&&(e.save(),e.translate(...a.pos),e.strokeStyle="#0000FF",e.beginPath(),e.arc(0,0,a.radius,0,2*Math.PI),e.stroke(),e.restore())},x=document.getElementById("menu"),E=document.getElementById("game-over"),PA=document.getElementById("cta-start"),D=document.getElementById("cta-restart"),cA=A=>A<10?`0${A}`:A.toString(),iA=()=>{e.font="20px Arial",e.fillStyle="#EAF0D8",e.fillText(`Level: ${u.level}`,500,40),e.fillText(`00:${cA(u.timer)}`,600,40),e.fillText(`Crabs: ${i.size}/15`,700,40),e.fillText(`Torpedoes: ${a.torpedoCount}`,860,40),e.fillText(`Score: ${u.score}`,1030,40),e.fillText(`Health: ${(a.health*100).toFixed(0)}%`,1150,40),u.mode==="DEBUG"&&(e.font="32px Arial",e.fillStyle="#FFFF00",e.fillText("DEBUG MODE",1e3,100))};PA.addEventListener("click",()=>{L()});D==null||D.addEventListener("click",()=>{L()});const u={timer:0,level:0,score:0,isPaused:!0,isGameOver:!1,mode:"NORMAL"};setInterval(()=>{!u.isPaused&&!u.isGameOver&&(u.timer--,u.timer<=0&&(u.timer=29,u.level++))},1e3);const lA=()=>{u.isPaused=!u.isPaused,x.style.display=u.isPaused?"flex":"none",E.style.display="none"},I=()=>{u.isGameOver=!0,u.isPaused=!0,x.style.display="none",E.style.display="flex"},L=()=>{u.isGameOver=!1,u.isPaused=!1,u.timer=29,u.level=1,u.score=0,x.style.display="none",E.style.display="none",q()},H=["TRASH","CRATE","BARREL"],d=new Set,gA=new URL("/assets/mixkit-sea-water-splash-1198-C2M4LKO5.wav",import.meta.url),YA=(A,t)=>{const s=(()=>{const B=Math.random();return B<.6?H[0]:B<.8?H[1]:H[2]})(),n={pos:[A,t],finalYPos:Math.floor(b(P.seabed.coords[1],P.seabed.coords[3])),vel:[b(-5,5),1],scale:Math.floor(b(1.8,2)),radius:1,texture:{offset:[0,0],size:[1,1]},isBreaking:!1,breaking:{acc:0,frame:0}},o=new Audio(gA.toString());switch(o.load(),o.play(),s){case"TRASH":return d.add($(n));case"CRATE":return d.add(_(n));case"BARREL":return d.add(tA(n))}},wA=A=>{for(const t of d)if(t.pos[0]+=t.vel[0]*A,t.pos[1]+=t.vel[1]*A,t.pos[1]>t.finalYPos)switch(t.vel[0]=0,t.vel[1]=0,t.type){case"BARREL":v(t.pos,t.radius,t.scale),d.delete(t);break;default:t.isBreaking=!0;break}},KA=4,hA=10,pA=new URL("/assets/mixkit-bag-of-coins-touch-3187-DC0Qj4CO.wav",import.meta.url),vA=()=>{for(const A of d){if(e.save(),e.translate(...A.pos),e.scale(A.scale,A.scale),A.isBreaking){if(A.breaking.acc++,A.breaking.acc>=hA&&(A.breaking.frame++,A.breaking.acc=0),A.breaking.frame>=KA){const t=new Audio(pA.toString());t.load(),t.play(),d.delete(A)}e.drawImage(K,r*A.breaking.frame+1+m,m,r-m*2,r-m*2,-r*.5,-r*.5,r,r)}else e.drawImage(K,A.texture.offset[0]*r+m,A.texture.offset[1]*r+m,A.texture.size[0]*r-m*2,A.texture.size[1]*r-m*2,-A.texture.size[0]*r*.5,-A.texture.size[1]*r*.5,A.texture.size[0]*r,A.texture.size[1]*r);e.restore(),u.mode==="DEBUG"&&(e.save(),e.translate(...A.pos),e.strokeStyle="#00FF00",e.beginPath(),e.arc(0,0,A.radius,0,2*Math.PI),e.stroke(),e.restore())}},O=(A,t)=>{const s=b(A,f-A),n=z*.25+t*.1;return{texture:{offset:[0,0],size:[16*4,16*2]},size:[A,t],pos:[s,n],vel:[b(-100,200),0],nextDropTimestamp:performance.now()+Math.floor(b(1e3,1e4))}},S=[O(16*6,16*3),O(16*8,16*4),O(16*10,16*5)],ZA=A=>{const t=performance.now();for(const s of S){const n=s.vel[0]<0?-1:1;if(s.pos[0]+=(s.vel[0]+u.level*100*n)*A,s.pos[1]+=s.vel[1]*A,s.pos[0]<=-s.size[0]&&(s.pos[0]=-s.size[0],s.vel[0]*=-1),s.pos[0]>=f+s.size[0]&&(s.pos[0]=f+s.size[0],s.vel[0]*=-1),s.nextDropTimestamp<=t){s.pos[0]>0&&s.pos[0]<f&&YA(...s.pos);let o=5e3-u.level*1e3,B=2e4-u.level*1e3;o<1e3&&(o=1e3-u.level*100),B<2e3&&(B=2e3-u.level*500),o<100&&(o=100),B<1e3&&(B=1e3),s.nextDropTimestamp=performance.now()+Math.floor(b(o,B))}}},DA=()=>{for(const A of S){e.save(),e.translate(...A.pos);const t=[A.vel[0]<0?-1:1,1];A.vel[0]<0&&e.scale(...t),e.drawImage(j,A.texture.offset[0]+m,A.texture.offset[1]+m,A.texture.size[0]-m*2,A.texture.size[1]-m*2,-A.size[0],-A.size[1],A.size[0],A.size[1]),u.mode==="DEBUG"&&(e.strokeStyle="#00FFFF",e.strokeRect(-A.size[0],-A.size[1],A.size[0],A.size[1])),e.restore()}},G=[0,4],HA=1e3,w=new Set,OA=(A,t)=>{EA();const s=a.vel[0]<0?-1:1,n={pos:[A+a.radius*s,t],vel:[HA*s,0],size:[20,10]};w.add(n)},MA=A=>{for(const t of w){t.pos[0]+=t.vel[0]*A,t.pos[1]+=t.vel[1]*A;const[s,n]=t.pos,[o,B]=t.size,[g,RA,W,IA]=[t.pos[1]-B/2,t.pos[0]+o/2,t.pos[1]+B/2,t.pos[0]+o/2];for(const c of d)g<c.pos[1]-c.radius||W>c.pos[1]+c.radius||Math.abs(c.pos[0]-s)<c.radius&&(v(t.pos,c.radius,c.scale),w.delete(t),d.delete(c));(s-o/2>f||s<o/2)&&w.delete(t)}},xA=new URL("/assets/mixkit-fast-rocket-whoosh-1714-bpF4WjSM.wav",import.meta.url),EA=()=>{const A=new Audio(xA.toString());A.load(),A.play()},UA=()=>{for(const A of w){e.save(),e.translate(...A.pos);const t=[A.vel[0]<0?-1:1,1];if(A.vel[0]<0&&e.scale(...t),e.drawImage(K,G[0]*r+m,G[1]*r+m,r*2-m*2,r-m*2,-(r*.5),-(r*.5),r*2,r),e.restore(),u.mode==="DEBUG"){e.strokeStyle="#FF0000";for(const s of d)e.beginPath(),e.moveTo(...A.pos),e.lineTo(...s.pos),e.stroke()}}};window.addEventListener("keydown",A=>{switch(A.key.toLowerCase()){case"w":{a.vel[1]=-Math.abs(a.vel[1]);break}case"a":{a.vel[0]=-Math.abs(a.vel[0]);break}case"s":{a.vel[1]=Math.abs(a.vel[1]);break}case"d":{a.vel[0]=Math.abs(a.vel[0]);break}case"e":{a.torpedoCount>0&&(OA(...a.pos),a.torpedoCount--);break}case"p":{lA();break}case"o":{u.mode=u.mode==="DEBUG"?"NORMAL":"DEBUG";break}}});let T=performance.now();const QA=()=>{const A=performance.now(),t=A/T/1e3;if(T=A,!u.isPaused){wA(t),MA(t),ZA(t),bA(t),BA(t);for(const s of d)if(!s.isBreaking){if(Math.abs(s.pos[0]-a.pos[0])<s.radius+a.radius&&Math.abs(s.pos[1]-a.pos[1])<s.radius+a.radius)switch(s.type){case"TRASH":{s.isBreaking=!0,u.score+=s.value;break}case"CRATE":{eA(),s.isBreaking=!0,a.torpedoCount+=s.scale;break}case"BARREL":{v(s.pos,s.blastRadius,s.scale),d.delete(s),a.health-=.1,a.health<=0&&I();break}}for(const n of i)if(Math.abs(n.pos[0]-s.pos[0])<n.radius+s.radius&&Math.abs(n.pos[1]-s.pos[1])<n.radius+s.radius){switch(s.type){case"BARREL":{d.delete(s),v(s.pos,s.blastRadius,s.scale);break}default:{s.isBreaking=!0;break}}i.delete(n)}i.size<=0&&I()}}},CA=()=>{if(e.clearRect(0,0,U.width,U.height),J(),UA(),zA(),vA(),DA(),fA(),rA(),u.mode==="DEBUG"){e.lineWidth=1;for(const A of d)e.strokeStyle="#0000FF",e.beginPath(),e.moveTo(...a.pos),e.lineTo(...A.pos),e.stroke()}iA()},k=()=>{QA(),CA(),window.requestAnimationFrame(k)};window.requestAnimationFrame(k);
