const MessageBox = ({own}) => {
  return (
    <>
      <div className={own ? "message own" : "message"} >
        <div className="messageTop">
          <img
            className="messageImg"
            src="https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg?size=626&ext=jpg"
          />
          <p className="messageText"> Hello this is a message</p>
        </div>
      </div>

      <div className="messageBottom">1 hours ago </div>
    </>
  );
};

export default MessageBox;
