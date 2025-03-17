import { useEffect } from 'react';

function Connect() {
  useEffect(() => {
    const emailBtn = document.getElementById('emailBtn');
    emailBtn && emailBtn.addEventListener('click', () => {
      window.location.href = "mailto:brandon@ucsd.edu";
    });
    
    const facebookBtn = document.getElementById('facebookBtn');
    facebookBtn && facebookBtn.addEventListener('click', () => {
      window.open("https://www.facebook.com/brandon.xu.520", "_blank");
    });

    const instagramBtn = document.getElementById('instagramBtn');
    instagramBtn && instagramBtn.addEventListener('click', () => {
      window.open("https://instagram.com/brandon_posts", "_blank");
    });
  }, []);

  return (
    <>
      <header>
        <h1>Connect with Me!</h1>
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

        <section>
          <h2>Get in Touch</h2>
          <p>Reach out through your preferred method:</p>
          
          <button id="emailBtn">Email</button>
          <button id="facebookBtn">Facebook</button>
          <button id="instagramBtn">Instagram</button>
        </section>
        
        <section id="contactFormSection">
          <h3>Contact Form</h3>
          <form action="submit_form" method="post">
            <fieldset>
              <legend>Contact Details</legend>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              
              <br />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <br />
              
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
            </fieldset>
            <button type="submit">Send Message</button>
          </form>
        </section>

      </main>
      <footer>
        <p>&copy; 2025 Brandon's Research Hub</p>
      </footer>
    </>
  );
}



export default Connect;
