import Header from './Header/header';
import AboutMe from './aboutMe/aboutMe';
import MyServices from './Services/services';
import './App.css';
import MyExperience from './experience/experience';
import MySkills from './Skills/skills';

function App() {
  return (
    <>
      <Header></Header>
      <AboutMe></AboutMe>
      <MyServices></MyServices>
      <MyExperience></MyExperience>
      <MySkills></MySkills>
    </>


  );
}

export default App;
