const Initialstate = {
    realestate:{

        },
    furnitures:[
        
    ],
    user:''
}

export const  ProductReducer = (state = Initialstate,action)=>{
   switch (action.type) {
       case 'ADDSELECTEDHOUSE':
             return {
                 ...state,
                 realestate:action.payload
             }
        case 'ADDTOCART':
            return {
                ...state,
                furnitures:[...state.furnitures,action.payload]
            }
        case 'REMOVEFROMCART':
            const index = state.furnitures.indexOf((CartIndex)=>{
                index = CartIndex
            })
            console.log(index)
            let newBasket = [...state.furnitures]
            if(index <= 0){
              newBasket.splice(index,1)
            }
            return {
                ...state,
                furnitures:newBasket
            }
        case 'SETUSEREMAIL':
            return{
                ...state,
                user:action.payload
            }
       default:
           return state
   }
}