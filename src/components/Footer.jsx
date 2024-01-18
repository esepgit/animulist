export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 p-8 text-white text-center">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-around">
        <div className="flex flex-shrink-0 items-center">
          {/* Logotipo */}
          <svg
            className="h-6 w-6 fill-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.139.615A1,1,0,0,0,22,.461,21.957,21.957,0,0,1,12,2.65,21.947,21.947,0,0,1,2,.46,1.007,1.007,0,0,0,.866.614.988.988,0,0,0,.6,1.673c.034.085,1.791,5.813,1.831,5.9a1,1,0,0,0,.907.578H5.864a.5.5,0,0,1,.5.564l-.259,2a.5.5,0,0,1-.5.436H4a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H5.217a.5.5,0,0,1,.5.564L4.572,22.53v.009a1,1,0,0,0,.993,1.111H7.5a1,1,0,0,0,1-1v-9a.5.5,0,0,1,.5-.5h6a.5.5,0,0,1,.5.5v9a1,1,0,0,0,1,1H18.44a1,1,0,0,0,.993-1.116v-.011l-1.141-8.809a.5.5,0,0,1,.5-.564H20a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H18.4a.5.5,0,0,1-.5-.436l-.259-2a.5.5,0,0,1,.5-.564h2.529a1.008,1.008,0,0,0,.926-.629c.038-.085,1.763-5.72,1.8-5.8A1,1,0,0,0,23.139.615ZM15.5,10.65a.5.5,0,0,1-.5.5H13.5a.5.5,0,0,1-.5-.5v-2a.5.5,0,0,1,.5-.5H15a.5.5,0,0,1,.5.5Zm-7-2a.5.5,0,0,1,.5-.5h1.5a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5H9a.5.5,0,0,1-.5-.5Z" />
          </svg>
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 hover:text-gray-500">
          <li>
            <a href="">Sugerencias</a>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <p>&copy; 2024 Animulist | Esepbit</p>
    </footer>
  );
}
