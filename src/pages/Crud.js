function Crud() {

  return (
    <>
      <header>
        <h1>CRUD Page</h1>
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

        <h2>Manage Blog Data</h2>
        <h4 className="notification">Select the card by clicking on the blog post card, then click UPDATE/DELETE</h4>
        <form id="crudForm">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required />
          
          <label htmlFor="img">Image URL</label>
          <input type="text" id="img" />
          <label htmlFor="alt">Image Alt</label>
          <input type="text" id="alt" />
          
          <label htmlFor="description">Description</label>
          <textarea id="description"></textarea>
          <label htmlFor="link">Link</label>
          <input type="text" id="link" />
          
          <label htmlFor="linkText">Link Text</label>
          <input type="text" id="linkText" />
          <button type="button" id="btnCreate">Create</button>
          <button type="button" id="btnUpdate" disabled>Update</button>
          <button type="button" id="btnDelete" disabled>Delete</button>
        </form>
        
        <button type="button" id="btnReadAll">Refresh Items</button>
        <section id="crudCardsContainer"></section>
      </main>
      <footer>

        <p>&copy; 2025 Brandon's Research Hub</p>
      </footer>
    </>
  );
}



export default Crud;
