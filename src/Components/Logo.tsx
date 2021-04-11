import {HeadlinesType} from '../Types/type';
import Lg from  './logo.svg';
export default function Logo(props:HeadlinesType) {
    return (
        <>
        <div className="brand-logo">
            <img src={Lg} alt="logo" />
        </div>
        <h4>{props.headlineH4}</h4>
        <h6 className="font-weight-light">{props.headlineH6}</h6>
        </>
    )
}