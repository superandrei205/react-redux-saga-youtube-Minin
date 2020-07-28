import { CREATE_POST } from "./types"
import { showAlert } from "./actions"

const forbitten = ["fuck", "spam", "php"]

export function forbiddenWordsMiddleware({dispatch}){
    return function (next){
        return function (action){
            if (action.type === CREATE_POST){
                const found = forbitten.filter(word=>action.payload.title.includes(word))
                if (found.length){
                    return dispatch(showAlert('Вы спаммер!!!'))
                }
            }
            return next(action)
        }
    }
}