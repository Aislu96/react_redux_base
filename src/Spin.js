import Loader from 'react-loader-spinner';
import {useSelector} from "react-redux";

const Spin = (props) => {
    const spinner = useSelector(state => state.appReducer.loading);
    console.log(spinner);

    return (
        <div className='loader-styles'>
            <Loader
                height={100}
                width={100}
                color="#00BFFF"
                type="TailSpin"
                visible={spinner}/>
        </div>
    )
}

export default Spin;
