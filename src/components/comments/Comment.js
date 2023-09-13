import ModelHeader from "../common/ModelHeader";
import ModelFooter from "../common/ModelFooter";
import "./Comment.css";

const Comment = ({ comment, toggleComments, modalRef }) => {
  return (
    <div className="show-comment" ref={modalRef}>
      <ModelHeader toggleComments={toggleComments} />
      <div className="comments-content comments-wrapper-box">
        {comment?.map((item, index) => {
          return (
            <div key={index}>
              <div className="user-comment">
                <img src={item.user.profile_picture} />
                <div>
                  <p>{item.user.username}</p>
                  <div className="comment-text">{item.text}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ModelFooter />
    </div>
  );
};

export default Comment;
