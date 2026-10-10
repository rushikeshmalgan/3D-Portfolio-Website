const SocialLinks = () => {
    return (
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* WhatsApp */}
        <a 
          href="https://wa.me/919359859985"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message me on WhatsApp"
          className="bg-green-500 p-3 rounded-full hover:scale-110 transition-transform duration-300"
        >
          <i className="fab fa-whatsapp text-white text-xl" aria-hidden="true"></i>
        </a>
  
        {/* Instagram */}
        <a 
          href="https://instagram.com/rushikesh.malgan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Rushikesh on Instagram"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 p-3 rounded-full hover:scale-110 transition-transform duration-300"
        >
          <i className="fab fa-instagram text-white text-xl" aria-hidden="true"></i>
        </a>
  
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/rushikesh-malgan-010756319/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Rushikesh on LinkedIn"
          className="bg-blue-600 p-3 rounded-full hover:scale-110 transition-transform duration-300"
        >
          <i className="fab fa-linkedin-in text-white text-xl" aria-hidden="true"></i>
        </a>
      </div>
    )
  }
  
  export default SocialLinks;
  