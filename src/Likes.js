import {connect} from 'react-redux';//подключает компонент React к хранилищу Redux.

function Likes(props) {
    console.log(props);
    return (
        <div className='button-controls'>
            <button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
            <button>Dislike</button>
        </div>
    )
}

//чтение данных из store(при из изменении) и передача данных
function mapStateToProps(state) {
    console.log('mapStateToProps >', state);
    return {
        likes: state.likes
    }
}

// отправки(dispatch) действий в хранилище(store), dispatch
function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => {
            console.log('click');
            const action = {type: "INCREMENT"};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
