
const FeedItem = ({item}) => {
    return(
        <div className="border border-1 border-black rounded mx-auto m-1 p-2" style={{width: "75%"}}>
            <div className="heading" >
                <h3 style={{display: "inline"}}>
                    {item.title}
                </h3>     - <small> by <b>{item.author}</b> on <i>
                {
                    new Date(item.datePosted).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
                }

                </i></small>
            </div>
            <br/>
            <p>{item.content}</p>
        </div>

    )
}

export default FeedItem