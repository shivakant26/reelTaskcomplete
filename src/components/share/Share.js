import ModelHeader from "../common/ModelHeader";
import "./Share.css";
const Share = ({ comment, toggleShare, modalRef }) => {
  return (
    <div className="show-comment" ref={modalRef}>
      <ModelHeader toggleShare={toggleShare} id="share" />
      <div className="comments-content">
        {comment?.map((item, index) => {
          return (
            <div className="user-comment" key={index}>
              <img src={item.user.profile_picture} />
              <p>{item.user.username}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Share;
