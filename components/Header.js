const Header = () => {
  return (
    <header>
      <div className='container'>

          <ul>
            <li>
              <a href='#' className='nav-link px-2 text-secondary'>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className='nav-link px-2 text-secondary'>
                About
              </a>
            </li>
            <li>
              <a href='#employment' className='nav-link px-2 text-secondary'>
                Employment
              </a>
            </li>
            <li>
              <a href='#education' className='nav-link px-2 text-secondary'>
                Education
              </a>
            </li>
            <li>
              <a href='#projects' className='nav-link px-2 text-secondary'>
                Certifications
              </a>
            </li>
            <li>
              <a href='#skills' className='nav-link px-2 text-secondary'>
                Skills
              </a>
            </li>
            <li>
              <a href='#contact' className='nav-link px-2 text-secondary'>
                Contact
              </a>
            </li>
          </ul>
        </div>

    </header>
  );
};
export default Header;
