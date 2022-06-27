



 let initialState = {
    users:[
        // {id:1,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSot6M-oAP1lg2OuHL4lieNgospaOdne0hmQ&usqp=CAU', followed:true, fullName:'Katya', status:'I am boss', location:{city:'Minsk', country:'Belarus'}},
        // {id:2,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSot6M-oAP1lg2OuHL4lieNgospaOdne0hmQ&usqp=CAU',followed:false, fullName:'Ira', status:'I am boss too', location:{city:'Minsk', country:'Belarus'}},
        // {id:3,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSot6M-oAP1lg2OuHL4lieNgospaOdne0hmQ&usqp=CAU', followed:true, fullName:'Lena', status:'I am boss too', location:{city:'Kiev', country:'Ukraine'}},
    ]
 }

export const usersReducer = (state:any = initialState, action:userReducerType) => {
    switch (action.type) {
        case 'FOLLOW':{
                return  {...state, users: state.users.map((el:any) => el.id === action.payload.userId
                    ? {...el, followed:true}:el)
                }
        }
        case "UN-FOLLOW":{
            return {...state, users: state.users.map((el:any) => el.id === action.payload.userId
                    ? {...el, followed:false}:el)
            }
        }
        case "SET-USERS":{

            return {...state, users: [...state.users, ...action.payload.users] } //[...action.payload.users] } 
        }

        default:
            return state
    }

}

export type userReducerType = followACType|unFollowACType|setUsersACType

export type followACType = ReturnType<typeof followAC>
 export type unFollowACType = ReturnType<typeof unFollowAC>
 export type setUsersACType = ReturnType<typeof setUsersAC>

export const followAC = (userId:number) => {
  return{
      type:'FOLLOW',
      payload:{
          userId
      }

  }as const
}

 export const unFollowAC = (userId:number) => {
     return{
         type:'UN-FOLLOW',
         payload:{
             userId
         }

     }as const
 }

 export const setUsersAC = (users:Array<any>) => {
     return{
         type:'SET-USERS',
         payload:{
             users
         }

     }as const
 }