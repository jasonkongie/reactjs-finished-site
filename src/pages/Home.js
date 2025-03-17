function Home() {

  return (
    <>
      <header>
        <h1>About Me</h1>
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

        <figure>
          <img src="images/brandon.png" alt="Brandon" width="200" />
          <figcaption>Brandon in a professional setting.</figcaption>
        </figure>
        <section>
          <h2>Biography</h2>
          <p>Brandon is an aspiring psychiatrist with a focus on addiction research, particularly serving the Chinese community.</p>
          
          <p>He enjoys riding his scooter, watching NFL, and binge-watching Japanese series like Doraemon. A typical nerd - just kidding haha.</p>
        </section>
        <aside>

          <h3>Quick Facts</h3>
          <dl>
            <dt>Age</dt>
            <dd>32</dd>

            <dt>Location</dt>
            <dd>San Francisco Bay Area, CA</dd>
            <dt>Expertise</dt>
            <dd>Addiction Psychiatry</dd>
          </dl>
        </aside>
      </main>
      <footer>
        <address>
          Email: <a href="mailto:brandon@ucsd.edu">brandon@ucsd.edu</a>
        </address>

        <p>&copy; 2025 Brandon's Research Hub</p>
      </footer>
    </>
  );
}


export default Home;
