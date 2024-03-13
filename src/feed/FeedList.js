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
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                items.map(item =>
                    <FeedItem
                        key={item._id}
                        item={item}/>
                )
            }
        </div>
    );
}

export default FeedList;