import { CREATE_POST, FETCHED_POST } from "./types"

const initialState = {
    posts:[],
    fetchedPosts:[]
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_POST:
            return {...state, posts: state.posts.concat([action.payload])}
        case FETCHED_POST:
            return {...state, fetchedPosts: action.payload}
        default: return state
    }
}