const Home = () => {
  const callAPI = async () => {
    try {
      const res = await fetch(`http://host.docker.internal:8000`);
      const data = await res.text();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  callAPI();

  return (
    <div>
      Welcome to Next.js!
      <br />
    </div>
  );
};
export default Home;
