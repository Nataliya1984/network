
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}

export type InitialStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: 'Natasha'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Lesha'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yes'},
    ] as Array<MessageType>,
}

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogReducerType): InitialStateType => {

    switch (action.type) {
        case 'dialogs/ADD-MESSAGE': {
            const message = action.newMessagText
           return   {...state, messages: [...state.messages, {id: 12, message:message}]}
        }
        default:
            return state
    }
}


export type DialogReducerType = addMessagACType

export type addMessagACType = ReturnType<typeof addMessagAC>


export const addMessagAC = (newMessagText:string) => {
    return {
        type: 'dialogs/ADD-MESSAGE',
        newMessagText
    } as const
}



