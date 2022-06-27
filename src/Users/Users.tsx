import React from 'react';
import classes from "./Users.module.css";

export type UsersPropsType={
    users:Array<any>
    follow:(id:number)=>void
    unFollow:(id:number)=>void
    setUsers:(users:Array<any>)=>void
}

export const Users = (props:UsersPropsType) => {
if(props.users.length === 0) {
    props.setUsers([
        {
            id: 1,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSot6M-oAP1lg2OuHL4lieNgospaOdne0hmQ&usqp=CAU',
            followed: true,
            fullName: 'Katya',
            status: 'I am boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSot6M-oAP1lg2OuHL4lieNgospaOdne0hmQ&usqp=CAU',
            followed: false,
            fullName: 'Ira',
            status: 'I am boss too',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSot6M-oAP1lg2OuHL4lieNgospaOdne0hmQ&usqp=CAU',
            followed: true,
            fullName: 'Lena',
            status: 'I am boss too',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ])
}

    return (
        <div>
            {
                props.users.map(el => {
                    return(
                        <div key={el.id}>
                            <span>
                                <div>
                                    <img src={el.photoUrl} className={classes.usersPhoto}/>
                                </div>
                                <div>
                                   {el.followed
                                       ? <button onClick={()=>{props.unFollow(el.id)}}>UnFollow</button>
                                       : <button onClick={()=>{props.follow(el.id)}}>Follow</button>}

                                </div>
                            </span>

                            <span>
                                <span>
                                  <div>{el.fullName}</div>
                                  <div>{el.status}</div>
                                </span>
                                <span>
                                    <div>{el.location.country}</div>
                                    <div>{el.location.city}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    );
};

