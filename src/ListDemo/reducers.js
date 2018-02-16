import {combineReducers} from 'redux'

const todos = (state = [{'name': 'ksehav'},{'name': 'ksehav'},{'name': 'ttrth'},{'name': 'adfdf'},{'name': 'adfasddf'},], action) => {
    switch (action.type) {
        case 'INIT_TODO':
            return [
                ...state,
                {
                   name:'Rajaram'
                }
            ]

        default:
            return state
    }
}


const todoApp = combineReducers({
    todos
})

export default todoApp