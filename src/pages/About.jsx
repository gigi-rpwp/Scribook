import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="container">
      <Navbar />
      <div class="container mt-4">
        <h1 class="mb-4">Sobre nosotros</h1>
        <h4>What is Lorem Ipsum?</h4>
        <p>
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries.
        </p>
        <h4>Where does it come from?</h4>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur
        </p>
      </div>
    </div>
  );
}

export default About;
