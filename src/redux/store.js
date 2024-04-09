import {createStore} from 'redux';//Создает хранилище Redux , в котором хранится полное дерево состояний вашего приложения.

//Начальное состояние (initialState)
const initialState = {
    likes: 0
}

// функция которая принимает предыдущее состояние и возвращается следюущее состояние
const reducer = (state = initialState, action) => {
    console.log('reducer >', action);

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                likes: state.likes + 1
            }
        default: return state;
    }
    return state;
}

const store = createStore(reducer);

export default store;
