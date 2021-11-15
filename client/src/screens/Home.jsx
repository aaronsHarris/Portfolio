import MotionHoc from "../components/animations/MotionHoc";

const HomeComponent = () => {
  return (
    <>
      <h1>Aaron Harris</h1>
      <p>Full Stack Developer</p>
    </>
  );
};

const Home = MotionHoc(HomeComponent);

export default Home;
