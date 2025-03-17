import React, { useState, useEffect } from 'react';


function Blog() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Initialize localStorage if not already set
    if (!localStorage.getItem("myProjects")) {
      const defaultData = [
        { 
          title: "Addiction Research Initiative", 
          img: "https://www.nih.gov/sites/default/files/news-events/research-matters/2007/20070716-brain.jpg", 
          alt: "Brain imaging representing addiction research", 
          description: "Here's a NIH project that I suggest looking into for understanding addiction and its impact on the Chinese community.", 
          link: "https://jasonkongie.com",
          linkText: "View Project" 
        },
        
        { 
          title: "Community Outreach Program", 
          img: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", 
          alt: "Community event representing outreach", 
          description: "This program engages with the local Chinese community through mental health initiatives!!", 
          link: "https://google.com", 
          linkText: "Learn More" 
        },

        { 
          title: "Destress with Hiking",
          img: "https://outdoorbeginner.com/wp-content/uploads/2019/10/img_2835.jpg?w=1000", 
          alt: "Hiking trail", 
          description: "One of my most recommended hobbies is to hike at Torrey Pines State Park near La Jolla and UC San Diego!", 
          link: "https://google.com", 
          linkText: "Learn More" 
        }
      ];
      localStorage.setItem("myProjects", JSON.stringify(defaultData));
    }
    
    const data = localStorage.getItem("myProjects");
    if (data) {
      setProjects(JSON.parse(data));
    }
  }, []);


  return (
    <>
      <header>
        <h1>Blog</h1>
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

        <h2>Blog Posts</h2>
        <div id="cardsContainer">
          {projects.map((item, index) => (
            <blog-card 
              key={index}
              title={item.title}
              img={item.img}
              alt={item.alt}
              
              description={item.description}
              link={item.link}
              linktext={item.linkText}>
            </blog-card>
          ))}
        </div>
      </main>
      <footer>

        <p>&copy; 2025 Brandon's Research Hub</p>
      </footer>
    </>
  );
}



export default Blog;