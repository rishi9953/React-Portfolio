import Header from './Header/header';
import AboutMe from './aboutMe/aboutMe';
import MyServices from './Services/services';
import MyExperience from './experience/experience';
import MySkills from './Skills/skills';
import ContactUs from './ContactUs/contactUs';
import './App.css';
import MyFooter from './Footer/footer';

function App() {
  return (
    <>
      <Header></Header>
      <AboutMe></AboutMe>
      <MyServices></MyServices>
      <MyExperience></MyExperience>
      <MySkills></MySkills>
      <ContactUs></ContactUs>
      <MyFooter></MyFooter>
    </>


  );
}

export default App;
