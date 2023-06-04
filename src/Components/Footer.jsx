const Footer = () => {
  return (
    <footer>
      <div className="main-container">
        <h5 className="copyright">
          &copy;
          {new Date().getFullYear()} comfy Sloth All Rights reserved
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
