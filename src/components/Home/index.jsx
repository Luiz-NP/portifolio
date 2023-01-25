import "./styles.css";

const Home = () => {
  return (
    <div className="wrapper">
      <main className="content">
        <h1 className="title">
          <span className="title-color">Welcome</span>
          <br />
          <span className="title-color">Player1</span>
        </h1>
        
        <p className="instructions text-shadow">press start to <br /> enter story mode</p>
      </main>  
    </div>
  );
};

export default Home;
