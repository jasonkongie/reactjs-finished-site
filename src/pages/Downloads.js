function Downloads() {

  return (
    <>
      <header>
        <h1>Downloads</h1>
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
          <h2>Downloadable Resources</h2>
          <p>Download datasets, research papers, and supplementary materials written by Brandon Xu.</p>
          
          <ul>
            <li><a href="files/dataset.pdf" download>Dataset PDF</a></li>
            <li><a href="files/research.zip" download>Research Archive</a></li>
          </ul>
        </section>
      </main>
      <footer>

        <p>&copy; 2025 Brandon's Research Hub - Copyright.</p>
      </footer>
    </>
  );
}



export default Downloads;
