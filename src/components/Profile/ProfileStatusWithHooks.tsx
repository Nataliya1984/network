import React, {ChangeEvent, useEffect, useState} from 'react';
import classes from "./ProfileInfo.module.css";

// 84(1) переделываем из классовой компоненты- функциональную


type ProfileStatusWithHooksPropsType = {
    status: string
    updateStatusTC:(status:string)=>any
}


export const ProfileStatusWithHooks =(props:ProfileStatusWithHooksPropsType)=>  {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

   // debugger

    useEffect(()=>{
         setStatus(props.status)
    },[props.status])

   const activateEditMode = () => {
        setEditMode(true)
   }

   const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
       setStatus(e.currentTarget.value)
   }

   const deactivateEditMode = () => {
        //debugger
    setEditMode(false)
       props.updateStatusTC(status)
   }


        return (
            <div>
                    <h3>статус пользователя:</h3>
                {/*если у нас false отображаем эту div*/}
                {!editMode && // если не эдит мод покажи спан
                    <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '---статуса нет---'}</span>
                    </div>
                }

                {/*если у нас true отображаем эту div*/}
                {editMode && //если будет эдитмод покажи импут
                    <div>
                    <input onChange={onStatusChange} value={status} onBlur={deactivateEditMode} autoFocus={true}/>
                    </div>
                }


            </div>
        );

};

