import MotionHoc from "../components/animations/MotionHoc";

const ContactComponent = () => {
  return (
    <>
      <h1>Contact</h1>
      <h3>aaronsharris@gmail.com</h3>
      <a href="https://github.com/aaronsHarris">GitHub</a>
      <br/>
      <a href="https://www.linkedin.com/in/aaron-harris-577867218/">LinkedIn</a>
    </>
  );
};

const Contact = MotionHoc(ContactComponent);

export default Contact;
