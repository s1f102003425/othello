(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(1891)}])},1891:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return f}});var o=i(5893),c=i(4110),t=i.n(c);let _=e=>(0,o.jsxs)("div",{className:t().cell,onClick:e.onClick,children:[3===e.color&&(0,o.jsx)("div",{className:t().candidate,style:{background:"#ffcd00"}}),0!==e.color&&(0,o.jsx)("div",{className:t().stone,style:{background:1===e.color?"#000":"#fff"}})]});var l=i(7294);let r=()=>{let[e,n]=(0,l.useState)(1),[i,o]=(0,l.useState)([[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,1,2,0,0,0],[0,0,0,2,1,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]),c=[[-1,-1],[-1,0],[0,-1],[1,1],[1,0],[0,1],[1,-1],[-1,1]],t=(t,_)=>{let l=JSON.parse(JSON.stringify(i)),r=!1;for(let n of c)if(void 0!==i[_+n[1]]&&0===i[_][t]&&i[_+n[1]][t+n[0]]===3-e){console.log(t,_);for(let o=1;o<8&&void 0!==i[_+o*n[1]][t+o*n[0]]&&0!==i[_+o*n[1]][t+o*n[0]];o++){if(i[_+o*n[1]][t+o*n[0]]!==3-e){if(i[_+o*n[1]][t+o*n[0]]===e){for(let i=o;i>0;i--)l[_+i*n[1]][t+i*n[0]]=e;r=!0;break}}}}r&&(l[_][t]=e,o(l),n(3-e))};return{board:i,onClick:t,turnColor:e}};var d=i(2729),a=i.n(d);let s=()=>{let{board:e,onClick:n,turnColor:i}=r();return(0,o.jsxs)("div",{className:a().container,children:[(0,o.jsx)("div",{className:a().board,children:e.map((e,i)=>e.map((e,c)=>(0,o.jsx)(_,{x:c,y:i,color:e,onClick:()=>n(c,i)},"".concat(c,"-").concat(i))))}),(0,o.jsxs)("p",{children:[1===i?"黒":"白","の手盤です"]})]})};var f=s},4110:function(e){e.exports={cell:"cell_cell__VTQkI",candidate:"cell_candidate__z7bwq",stone:"cell_stone__pDME7"}},2729:function(e){e.exports={container:"index_container__gnN1f",board:"index_board__2d6xe",main:"index_main__kAcUb",footer:"index_footer__qq_p6",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);