import post, {PostPropsType} from "../Profile/MyPosts/Post/Post";

export type MessageType ={
    id:number
    message:string
}
export type DialogType ={
    id:number
    name:string
}
export type  PostType={
    id:number
    message:string
    likesCount:number
}

export type ProfilePageType={
    post:Array<PostType>
}

export type DialogsPageType ={
    dialogs:Array<DialogType>
    messages:Array<MessageType>
}

export type SidebarType = {}

export type RootStateType={
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
    sidebar:SidebarType

}



export let state:RootStateType = {
    profilePage: {
        post: [
            {id: 1, message: 'Hi, how are you?', likesCount: 5},
            {id: 2, message: "It's my first post", likesCount: 4},
        ],
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
        ]
    },

    sidebar:{

    },

}

export let addPost = (postMessage:string) => {
    let newPost = {id: 3,
                    message: postMessage,
                    likesCount: 4};
    state.profilePage.post.push(newPost);

}

