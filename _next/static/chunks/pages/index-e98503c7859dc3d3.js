(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1891)}])},1891:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return f}});var i=n(5893),t=n(4110),c=n.n(t);let l=e=>(0,i.jsxs)("div",{className:c().cell,onClick:e.onClick,children:[-1===e.color&&(0,i.jsx)("div",{className:c().candidate,style:{border:"1px"}}),0!==e.color&&-1!==e.color&&(0,i.jsx)("div",{className:c().stone,style:{background:1===e.color?"#000":"#fff"}})]});var r=n(7294);let _=()=>{let[e,o]=(0,r.useState)(1),[n,i]=(0,r.useState)([[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,1,2,0,0,0],[0,0,0,2,1,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]),t=[[-1,-1],[-1,0],[0,-1],[1,1],[1,0],[0,1],[1,-1],[-1,1]],c=(c,l)=>{let r=JSON.parse(JSON.stringify(n));for(let i of(r=n.map(e=>e.map(e=>-1===e?0:e)),t))if(void 0!==r[l+i[1]]&&0===r[l][c]&&r[l+i[1]][c+i[0]]===3-e){console.log(c,l);for(let n=1;n<8&&void 0!==r[l+n*i[1]]&&void 0!==r[l+n*i[1]][c+n*i[0]]&&0!==r[l+n*i[1]][c+n*i[0]];n++)if(r[l+n*i[1]][c+n*i[0]]!==3-e&&r[l+n*i[1]][c+n*i[0]]===e){for(let o=n;o>0;o--)r[l+o*i[1]][c+o*i[0]]=e;r[l][c]=e,o(3-e);break}}for(let o=0;o<8;o++)for(let n=0;n<8;n++)for(let i of t)if(void 0!==r[n+i[1]]&&0===r[n][o]&&r[n+i[1]][o+i[0]]===e){for(let t=1;t<8&&void 0!==r[n+t*i[1]]&&void 0!==r[n+t*i[1]][o+t*i[0]]&&0!==r[n+t*i[1]][o+t*i[0]];t++)if(r[n+t*i[1]][o+t*i[0]]!==e&&r[n+t*i[1]][o+t*i[0]]===3-e){r[n][o]=-1;break}}console.table(r),i(r)};return{board:n,onClick:c,turnColor:e}};var d=n(2729),a=n.n(d);let s=()=>{let{board:e,onClick:o,turnColor:n}=_();return(0,i.jsxs)("div",{className:a().container,children:[(0,i.jsx)("div",{className:a().board,children:e.map((e,n)=>e.map((e,t)=>(0,i.jsx)(l,{x:t,y:n,color:e,onClick:()=>o(t,n)},"".concat(t,"-").concat(n))))}),(0,i.jsxs)("h1",{children:[1===n?"黒":"白","の手盤です"]})]})};var f=s},4110:function(e){e.exports={cell:"cell_cell__VTQkI",candidate:"cell_candidate__z7bwq",stone:"cell_stone__pDME7"}},2729:function(e){e.exports={container:"index_container__gnN1f",board:"index_board__2d6xe",main:"index_main__kAcUb",footer:"index_footer__qq_p6",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);