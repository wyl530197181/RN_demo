//这个函数是Action Creator
export const plus=(number)=>({
    type:'PLUS',
    number:number
});
export const reduce=(number)=>({
    type:'REDUCE',
    number:number
});
//plus(1)
//{type:'PLUS',number:1}  action
//并没有格式的推荐 type method 自定义

