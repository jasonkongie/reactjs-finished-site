import React from 'react';


function Research() {
  const researchData = [
    { 
      title: "Bruce Lee", 
      img: "images/brucelee.jpg", 
      alt: "Study A", 
      description: "How to conquer yourself", 
      link: "https://www.redalyc.org/pdf/337/33770318.pdf",
      linkText: "View Paper" 
    },
    
    { 
      title: "Carl Jung's Research", 
      img: "images/Carl-Jung.webp", 
      alt: "Survey on Carl Jung's philosophy", 
      description: "Survey on Carl Jung's philosophy", 
      link: "http://www.bahaistudies.net/asma/The-Concept-of-the-Collective-Unconscious.pdf",
      linkText: "View Paper" 
    }
  ];


  return (
    <>
      <header>
        <h1>Research Data</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">blog</a></li>
            <li><a href="/research">Research Data</a></li>
            <li><a href="/connect">Connect with Me!</a></li>
            <li><a href="/donate">Donate</a></li>
          </ul>
        </nav>
      </header>
      <main>

        <h2>Brandon's Research Papers</h2>
        <div id="researchCardsContainer">
          {researchData.map((item, index) => (
            <research-card 
              key={index}
              title={item.title}
              img={item.img}
              alt={item.alt}
              description={item.description}
              link={item.link}
              linktext={item.linkText}>
            </research-card>
          ))}
        </div>

      </main>
      <footer>
        <p>&copy; 2025 Brandon's Research Hub</p>
      </footer>
    </>
  );
}



export default Research;