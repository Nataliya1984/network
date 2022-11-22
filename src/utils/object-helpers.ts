import {UserType} from "../components/redux/users-reducer";

export const updateObjectInArray = (items:Array<UserType>, itemId:number, objPropName:any, newObjProps:any) =>{
   return  items.map((el: any) => el[objPropName] === itemId
        ? {...el, ...newObjProps} : el)
}
