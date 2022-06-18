import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {addMessagAC, dialogsReducer, updateNewMessagTextAC} from "./dialogs-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'
// const ADD_MESSAGE = 'ADD-MESSAGE'
// const UPDATE_NEW_MESSAG_TEXT='UPDATE-NEW-MESSAG-TEXT'

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type  PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    post: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessagText:string
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType

}


export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    // updateNewPostText: (newText: string) => void
    // addPost: () => void
    // addDialog:()=>void
    // updateNewDialogText:(newText: string)=>void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =AddPostActionType
                         |UpdateNewPostTextActionType
                         |AddMessagActionType
                         |UpdateNewMessagTextActionType

// export type AddPostActionType = {
//     type:'ADD-POST'
//     newPostText:string
// }

// export type UpdateNewPostTextActionType = {
//     type:'UPDATE-NEW-POST-TEXT'
//     newText:string
// }

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type AddMessagActionType = ReturnType<typeof addMessagAC>
export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewMessagTextActionType = ReturnType<typeof updateNewMessagTextAC>

// export const addPostAC =(postText:string)=>{
//     return {
//         type:'ADD-POST',
//         newPostText: postText
//     }as const
// }

// export const addMessagAC = (messagText:string)=> {
//     return {
//         type: 'ADD-MESSAGE',
//         newMessagText: messagText
//     }as const
// }

// export const updateNewPostTextAC =(text:string)=>{
//     return {
//         type:'UPDATE-NEW-POST-TEXT',
//         newText:text
//     }as const
// }

// export const updateNewMessagTextAC = (text:string) => {
//   return{
//       type:'UPDATE-NEW-MESSAG-TEXT',
//       newText:text
//   }as const
// }

export const store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hi, how are you?', likesCount: 5},
                {id: 2, message: "It's my first post", likesCount: 4},
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Natasha'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Katya'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Lesha'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yes'},
            ],
            newMessagText:''
        },

        sidebar: {},

    },
    _callSubscriber() {
        console.log('state is change')
    },

    getState() {
        return this._state
    },

    subscribe(callback) {
        this._callSubscriber = callback
    },


    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber()
    // },
    // addPost() {
    //     let newPost: PostType = {
    //         id: 3,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 4
    //     };
    //     this._state.profilePage.post.push(newPost);
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber()
    // },

    // addDialog(){
    //     let newMessage:MessageType ={
    //         id:5,
    //         message:this._state.dialogsPage.newDialogText,
    //     };
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newDialogText = ''
    //     this._callSubscriber()
    // },
    // updateNewDialogText(newText: string) {
    //     this._state.dialogsPage.newDialogText=newText
    //     this._callSubscriber()
    // },

    dispatch(action) {

        this._state.profilePage =profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber()

        // if (action.type === 'ADD-POST') {
        //     let newPost: PostType = {
        //         id: 10,
        //         message: action.newPostText, //this._state.profilePage.newPostText, //action.newPostText
        //         likesCount: 4
        //     };
        //     this._state.profilePage.post.push(newPost);
        //     this._state.profilePage.newPostText = ''
        //     this._callSubscriber()
        //  //   this._addPost()
        //
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state.profilePage.newPostText = action.newText
        //     this._callSubscriber()
        //   //  this._updateNewPostText(action.newText)
        //
        // }else if (action.type === 'ADD-MESSAGE'){
        //     let newMessage:MessageType ={ id:12, message:action.newMessagText}; //this._state.dialogsPage.newDialogText,
        //     this._state.dialogsPage.messages.push(newMessage);
        //     this._state.dialogsPage.newMessagText = ''
        //     this._callSubscriber()
        // }else if (action.type==='UPDATE-NEW-MESSAG-TEXT'){
        //         this._state.dialogsPage.newMessagText=action.newText
        //         this._callSubscriber()
        // }

    }

}

// @ts-ignore
window.store = store

