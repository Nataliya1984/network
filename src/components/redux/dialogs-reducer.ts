import {ActionsTypes, DialogsPageType, MessageType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAG_TEXT='UPDATE-NEW-MESSAG-TEXT'

let initialState = {
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
}

export const dialogsReducer = (state:DialogsPageType = initialState, action:ActionsTypes):DialogsPageType => {

  switch (action.type) {
    case 'ADD-MESSAGE':{
      let newMessage:MessageType ={ id:12, message:action.newMessagText}; //this._state.dialogsPage.newDialogText,
      state.messages.push(newMessage);
      state.newMessagText = ''
      return state
    }
    case 'UPDATE-NEW-MESSAG-TEXT':{
      state.newMessagText=action.newText
      return state

    }
    default:
      return state
  }
}

export const addMessagAC = (messagText:string)=> {
  return {
    type: 'ADD-MESSAGE',
    newMessagText: messagText
  }as const
}

export const updateNewMessagTextAC = (text:string) => {
  return{
    type:'UPDATE-NEW-MESSAG-TEXT',
    newText:text
  }as const
}

