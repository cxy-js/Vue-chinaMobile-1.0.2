// const changetoptile=changetoptile
// const changettel=changettel
// const depositetel=depositetel
export default{
    changetoptile(state,title){
        state.toptitlelis=title
    },
    changetel(state,tel){
        state.tel=tel
    },
    changedepositetel(state,depositetel){
        state.depositetel=depositetel
    },
    changedepositeprice(state,depositeprice){
        state.depositeprice=depositeprice
    },
    changesingin(state,boolean){
        state.issingin=boolean
    },
    backshow(state,boolean){
        state.backshow=boolean
    },
    spanisshow(state,boolean){
        state.spanisshow=boolean
    },
    footerisshow(state,boolean){
        state.footerisshow=boolean
    }





}
