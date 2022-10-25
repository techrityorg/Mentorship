import Photo from './photo.jfif'; 

function Navigation(){

    return (
        <div>
        <nav>
          <h1>Ansh Goyal</h1>
          <a href="mailto:anshgoyal1704@gmail.com"><h3>Email</h3></a
          >
          <a href="https://www.linkedin.com/in/thisisanshg" target="_blank"><h3>LinkedIn</h3></a
          >
          <a href="https://github.com/anshgoyalevil" target="_blank"><h3>GitHub</h3></a
          >
        </nav>
        <div>
          <img src={Photo} alt="Ansh Goyal's Photo" />
        </div>
      </div>
    );
}

export default Navigation;