const Content = ({ children }) => {
  return (
    <div className="border m-3 p-3 flex flex-wrap ">
      <div className="text-red-300">

        {children}
      </div>
    </div>
  );
};

export default Content;
