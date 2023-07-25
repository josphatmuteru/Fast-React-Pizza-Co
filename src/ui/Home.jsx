import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="my-16 mt-10 px-4 text-center sm:my-10">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
