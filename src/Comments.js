import Comment from "./Comment";
function Comments () {

    const commentsData = [
        { creator: 'andy', comment:'great', likedCount:10},
        { creator: 'Alex', comment:'God', likedCount:10},
        { creator: 'Lucas', comment:'very good', likedCount:10},
      ];

      return(
         <div className='comments'>
      {commentsData.map((comment) => {
        return(
          <Comment comment={comment} />
              )
      })}
    </div>
    )
}
 export default Comments;