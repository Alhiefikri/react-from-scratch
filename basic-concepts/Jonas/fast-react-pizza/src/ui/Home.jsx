import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 text-center sm:px-6">
      <h1 className="mb-8 px-4 text-center text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="inline-block text-yellow-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
