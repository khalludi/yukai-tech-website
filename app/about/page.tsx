export default function AboutPage() {
  return (
    <div className="mt-10">
      {/* Tagline */}
      <h1 className="text-center text-3xl font-bold">
        Big things for big teams.
      </h1>

      {/* Founder Card */}
      <div className="mt-10 mx-10 border-2 rounded-2xl border-black drop-shadow-lg p-6 flex flex-row gap-10">
        <div className="w-1/2">Placeholder Image</div>
        <div className="w-1/2">
          <h1>Founder</h1>
          <div id="Logos" className="flex flex-row gap-3">
            <p>Amazon</p>
            <p>Appfolio</p>
          </div>
          <p className="text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* Senior Advisor Card */}
      <div className="mt-10 mx-10 border-2 rounded-2xl border-black drop-shadow-lg p-6 flex flex-row gap-10">
        <div className="w-1/2">Placeholder Image</div>
        <div className="w-1/2">
          <h1>Senior Advisor</h1>
          <div id="Logos" className="flex flex-row gap-3">
            <p>Neustar</p>
            <p>Airside Mobile</p>
            <p>SajTech</p>
          </div>
          <p className="text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="mt-10" />
    </div>
  );
}
