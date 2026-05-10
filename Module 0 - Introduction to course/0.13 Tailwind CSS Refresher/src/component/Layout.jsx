function Layout() {
  return (
    <>
      <div className="flex">
        <div className="flex-1 border border-green-800">First div 1</div>
        <div className="flex-2 border border-pink-700">Second div 2</div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div>First</div>
        <div>Second</div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">Grid Item 1</div>
        <div>Grid Item 2</div>
      </div>
    </>
  );
}

export default Layout;
