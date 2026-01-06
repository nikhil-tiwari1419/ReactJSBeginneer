const Content = ({ children }) => {
  return (
    <div className="border m-3 p-3 flex flex-wrap ">
      <div className="text-pink-400">

        {children}
      </div>
    </div>
  );
};

export default Content;
