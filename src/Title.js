import {useDispatch, useSelector} from "react-redux";
import {inputText} from "./redux/action";

function Title(props) {
    console.log("props title >", props);
    // Получить данные из состояния(состояния) хранилища(store) Redux с помощью функции селектора.
    const text = useSelector(state => {
        const {inputReducer} = state;
        return inputReducer.text;
    });
//Этот хук возвращает ссылку на функцию dispatch из Redux хранилища(store).
    const dispatch = useDispatch();

    const handleChange = (e) => {
        console.log('handle text >>', e.target.value);
        dispatch(inputText(e.target.value))
    }
    return (
        <div className='card-title'>
            <div className='card-title-top'>
                <input type="text" onChange={handleChange}/>
            </div>
            <p>{text}</p>
        </div>
    )
}


export default Title;
