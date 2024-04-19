import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createItemThunk} from "../feed/thunks";

const AddPost = () => {
    const [title, setTitle] = useState("");

    const [content, setContent] = useState();
    const [author, setAuthor] = useState(1);

    const dispatch = useDispatch();

    const saveItem = () => {
        const payload = {}
        payload.title = title;
        payload.content = content;
        payload.datePosted = new Date();
        payload.author = 1
        console.log(payload)
        dispatch(createItemThunk(payload));
    }
    return (
        <>
            <div className="fs-3">
                <span><Link to="/tuiter/profile" className="text-black text-decoration-none">
                    <i className="bi bi-x-lg">
                </i></Link></span> Add Post</div>

            <form style={{marginTop:50}}>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control border-opacity-0" id="name" aria-describedby="name"
                           onChange={(e) => setTitle(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input type="text" className="form-control border-opacity-0" id="name" aria-describedby="name"
                           onChange={(e) => setContent(e.target.value)}></input>
                </div>


                <br/>
                <button type="submit" className="btn btn-primary"
                                                   onClick={saveItem}>Save</button>
                <br/>
            </form>
        </>

    );
}
export default AddPost;