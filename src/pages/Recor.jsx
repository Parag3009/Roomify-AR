// import logo from './logo.svg';
// import './App.css';

function Recor() {
  return (
    <div className="App">
     {/* <header class="bg-gray-900">
      <div class="container mx-auto">
        <div class="flex justify-center items-center py-4">
          <h1 class="text-2xl font-bold uppercase">Screen Recorder</h1>
        </div>
      </div>
    </header> */}
  
    <main class="overflow-hidden">
      <div class="container mx-auto py-8 px-4">
        <h2 class="text-xl text-gray-500 uppercase font-light mb-4">
          Video recorder
        </h2>
  
        <video src="" autplay class="video-feedback bg-black w-full h-auto mb-4"></video>
  
        <div class="flex flex-wrap -mx-4 mb-8">
          <button class="start-recording mx-4 flex-1 bg-gradient-to-br from-purple-500 to to-pink-500 p-4 uppercase text-lg font-bold transition-all duration-300 hover:opacity-90 disabled:opacity-50">
            Record Screen
          </button>
          <button class="stop-recording mx-4 flex-1 bg-gradient-to-br from-purple-500 to to-pink-500 p-4 uppercase text-lg font-bold transition-all duration-300 hover:opacity-90 disabled:opacity-50" >
            Stop Recording
          </button>
        </div>
  
        <div class="recorded-video-wrap hidden">
          <h2 class="text-xl text-gray-500 uppercase font-light mb-4">
            Recorded video
          </h2>
  
          <video src="" class="recorded-video bg-black w-full h-auto mb-8"></video>
          <div class="flex flex-wrap -mx-4">
            <a class="download-video text-center mx-4 flex-1 bg-gradient-to-br from-purple-500 to to-pink-500 p-4 uppercase text-lg font-bold transition-all duration-300 hover:opacity-90 disabled:opacity-50" disabled>
              Download
            </a>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}

export default Recor;
