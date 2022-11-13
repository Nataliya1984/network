import {addPostAC} from "./profile-reducer";
import {addMessagAC} from "./dialogs-reducer";


 type MessageType = {
    id: number
    message: string
}
 type DialogType = {
    id: number
    name: string
}
 type  PostType = {
    id: number
    message: string
    likesCount: number
}

 type ProfilePageType = {
    post: Array<PostType>
    newPostText: string
}

 type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessagText:string
}

export type SidebarType = {}

 type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType

}


 type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

type ActionsTypes = AddPostActionType
                         |AddMessagActionType



 type AddMessagActionType = ReturnType<typeof addMessagAC>
 type AddPostActionType = ReturnType<typeof addPostAC>



 const store: StoreType = {
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



    dispatch(action) {

    }

}

// @ts-ignore
window.store = store

