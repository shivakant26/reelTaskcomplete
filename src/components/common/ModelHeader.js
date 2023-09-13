const ModelHeader = ({ id, toggleComments, toggleShare }) => {
  return (
    <div className="comments-header" onClick={toggleComments || toggleShare}>
      {id !== "share" && <span>Comments</span>}
    </div>
  );
};
export default ModelHeader;
