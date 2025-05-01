
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-8 mt-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 mb-4 md:mb-0">
            © {currentYear} Atul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
