import Card1 from "./components/Card1";
import Card2 from "./components/Card2";

function App() {
  return (
    <>
      <div className="min-h-screen lg:p-10 bg-gradient-to-b w-full from-[#373E44] to-[#191B1F] flex flex-col lg:flex-row lg:justify-center items-center">
        <div className="w-full lg:w-[736px] h-[200px] lg:h-[550px] rounded-[27px] border-[1px] border-[#96BEE7] bg-[#616161D1] mt-10 lg:mt-0 mx-4 lg:mx-0"></div>
        <div className="flex-col w-full lg:w-[680px] h-auto lg:h-[520px] lg:ml-[50px] mt-[50px] lg:mt-0 mb-[90px] lg:mb-[37px]">
          <Card1 />
          <div className="w-full h-[8%] lg:mt-0 mt-4 lg:mb-0 mb-4 flex justify-center items-center flex-col">
            <div className="w-[85%] bg-[#363C43] h-[4px] rounded-full"></div>
            <div className="w-[85%] h-[4px] bg-black rounded-full opacity-40 blur-[1px]"></div>
          </div>
          <Card2 />
          <div className="w-full h-[8%] lg:mt-0 mt-4 lg:mb-0 mb-4 flex justify-center items-center flex-col">
            <div className="w-[85%] bg-[#363C43] h-[4px] rounded-full"></div>
            <div className="w-[85%] h-[4px] bg-black rounded-full opacity-40 blur-[1px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
