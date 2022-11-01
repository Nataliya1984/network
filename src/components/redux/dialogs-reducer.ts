
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
    newMessagText: ''
}

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogReducerType): InitialStateType => {

    switch (action.type) {
        case 'ADD-MESSAGE': {
            const message = state.newMessagText
           return   {...state,newMessagText:'', messages: [...state.messages, {id: 12, message:message}]}
        }
        case 'UPDATE-NEW-MESSAG-TEXT': {
            return  {...state, newMessagText:action.newText}
        }
        default:
            return state
    }
}


export type DialogReducerType = addMessagACType|updateNewMessagTextACType

export type addMessagACType = ReturnType<typeof addMessagAC>
export type updateNewMessagTextACType = ReturnType<typeof updateNewMessagTextAC>

export const addMessagAC = () => {
    return {
        type: 'ADD-MESSAGE',
    } as const
}

export const updateNewMessagTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-MESSAG-TEXT',
        newText: text
    } as const
}

