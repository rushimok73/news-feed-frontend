import FeedItem from "./FeedItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findItemsThunk} from "./thunks";


const FeedList = () => {
    const {items, loading} = useSelector(
        (state) => state.items);
    console.log(items)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findItemsThunk())
    }, [])

    return (

        <div>
            <div className="position-fixed bg-white z-1 mt" style={{ top: 0, width: '100%' }}>
                <h3 className="mt-2">Your Feed</h3>
                <hr className="m-0"/>
            </div>

            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            <ul className="list-group z-0" style={{ marginTop: '70px' }}>
            {
                items.map(item =>
                    <FeedItem
                        key={item._id}
                        item={item}/>
                )
            }
            </ul>
        </div>
    );
}

export default FeedList;