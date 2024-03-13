
const FeedItem = ({item}) => {
    return(
        <div>
            <h4>{item.title} | {item.author} | {item.datePosted}</h4>
            <br/>
            <p>{item.content}</p>
        </div>
    )
}

export default FeedItem