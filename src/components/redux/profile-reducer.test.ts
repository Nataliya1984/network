import {addPostAC, deletePostAC, profileReducer} from "./profile-reducer";

let startState:any

beforeEach(()=>{
    startState = {
        post: [
            {id: 1, message: 'Hi, how are you?', likesCount: 5},
            {id: 2, message: "It's my first post", likesCount: 4},
            {id: 3, message: "2 post", likesCount: 4},
            {id: 4, message: "3 post", likesCount: 4},
        ]
    }
})

test('новый пост должен быть добавлен', ()=>{

    let action = addPostAC('пост добавлен')

    let newState = profileReducer(startState, action)

    expect( newState.post.length).toBe(5)
    expect( newState.post[4].message).toBe('3 post')
    expect( newState.post[4].likesCount).toBe(4)
})

test('пост должен быть удален', ()=>{

    let action = deletePostAC(1)

    let newState = profileReducer(startState, action)

    expect( newState.post.length).toBe(3)

})

test('after deleting length should be decrement if id is incorrect ', ()=>{

    let action = deletePostAC(1000)

    let newState = profileReducer(startState, action)

    expect( newState.post.length).toBe(4)

})


