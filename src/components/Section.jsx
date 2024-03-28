const Section = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  justify-between mx-auto ">
      {children}
    </div>
  );
};

export default Section;
