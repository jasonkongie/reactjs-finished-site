document.addEventListener("DOMContentLoaded", () => {
  let logo = document.querySelector("header hgroup");
  if (logo) {
    logo.style.cursor = "pointer";
    logo.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
  

  let sidebar = document.createElement("div");
  sidebar.id = "contactSidebar";
  sidebar.innerHTML = `
    <a href="mailto:brandon@ucsd.edu">Email</a>
    <a href="https://www.facebook.com/brandon.xu.520" target="_blank">Facebook</a>
    <a href="https://instagram.com/brandon_posts" target="_blank">Instagram</a>
    <button id="toggleContactForm">Contact Form</button>
  `;
  document.body.appendChild(sidebar);
  
  let formSection = document.querySelector("form")?.closest("section");
  if (formSection) {
    formSection.classList.add("hidden");
    let toggleButton = document.getElementById("toggleContactForm");
    toggleButton.addEventListener("click", () => {
      formSection.classList.toggle("hidden");
    });
  }
  
  if (document.getElementById("cardsContainer")) {
    loadLocalBlog();
  }
  
  if (document.getElementById("researchCardsContainer")) {
    loadLocalResearch();
  }
});


class BlogCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: 280px;
          margin: 16px;
        }
        .card {
          background: #fff;
          color: #333;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          font-family: Arial, sans-serif;
          min-height: 200px;
        }
        h2 {
          margin-top: 0;
          font-size: 1.2rem;
        }
        img {
          max-width: 100%;
          border-radius: 4px;
        }
        p {
          margin-top: 0.5rem;
        }
        a {
          display: inline-block;
          margin-top: 0.5rem;
          color: #007acc;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
      <article class="card">
        <h2></h2>
        <picture>
          <img src="" alt="">
        </picture>
        <p></p>
        <a href="">Learn More</a>
      </article>
    `;
    this._titleElem = this.shadowRoot.querySelector("h2");
    this._imgElem  = this.shadowRoot.querySelector("img");
    this._descElem = this.shadowRoot.querySelector("p");
    this._linkElem = this.shadowRoot.querySelector("a");
  }
  
  static get observedAttributes() {
    return ["title", "img", "alt", "description", "link", "linktext"];
  }
  
  attributeChangedCallback() {
    this.updateCard();
  }
  
  connectedCallback() {
    this.updateCard();
  }
  
  updateCard() {
    this._titleElem.textContent = this.getAttribute("title") || "No Title Provided";
    this._imgElem.src = this.getAttribute("img") || "";
    this._imgElem.alt = this.getAttribute("alt") || "Blog image";
    this._descElem.textContent = this.getAttribute("description") || "No description provided.";
    this._linkElem.href = this.getAttribute("link") || "#";
    this._linkElem.textContent = this.getAttribute("linktext") || "Learn More";
  }
}
customElements.define("blog-card", BlogCard);


class ResearchCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: 280px;
          margin: 16px;
        }
        .card {
          background: #fff;
          color: #333;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          font-family: Arial, sans-serif;
          min-height: 200px;
        }
        h2 {
          margin-top: 0;
          font-size: 1.2rem;
        }
        img {
          max-width: 100%;
          border-radius: 4px;
        }
        p {
          margin-top: 0.5rem;
        }
        a {
          display: inline-block;
          margin-top: 0.5rem;
          color: #007acc;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
      <article class="card">
        <h2></h2>
        <picture>
          <img src="" alt="">
        </picture>
        <p></p>
        <a href="">Learn More</a>
      </article>
    `;
    
    this._titleElem = this.shadowRoot.querySelector("h2");
    this._imgElem  = this.shadowRoot.querySelector("img");
    this._descElem = this.shadowRoot.querySelector("p");
    this._linkElem = this.shadowRoot.querySelector("a");
  }
  
  static get observedAttributes() {
    return ["title", "img", "alt", "description", "link", "linktext"];
  }
  
  attributeChangedCallback() {
    this.updateCard();
  }
  
  connectedCallback() {
    this.updateCard();
  }
  
  updateCard() {
    this._titleElem.textContent = this.getAttribute("title") || "No Title Provided";
    this._imgElem.src = this.getAttribute("img") || "";
    this._imgElem.alt = this.getAttribute("alt") || "Research image";
    this._descElem.textContent = this.getAttribute("description") || "No description provided.";
    this._linkElem.href = this.getAttribute("link") || "#";
    this._linkElem.textContent = this.getAttribute("linktext") || "Learn More";
  }
}

customElements.define("research-card", ResearchCard);

function initLocalData() {
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
}


function loadLocalBlog() {
  const container = document.getElementById("cardsContainer");
  if (!container) return;
  
  container.innerHTML = "";
  const data = localStorage.getItem("myProjects");
  if (data) {
    JSON.parse(data).forEach(item => {
      const card = document.createElement("blog-card");
      card.setAttribute("title", item.title);
      card.setAttribute("img", item.img);
      card.setAttribute("alt", item.alt);
      card.setAttribute("description", item.description);
      card.setAttribute("link", item.link);
      card.setAttribute("linktext", item.linkText);
      container.appendChild(card);
    });
  }
}

function loadLocalResearch() {
  const container = document.getElementById("researchCardsContainer");
  if (!container) return;
  container.innerHTML = "";
  
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
  
  researchData.forEach(item => {
    const card = document.createElement("research-card");
    card.setAttribute("title", item.title);
    card.setAttribute("img", item.img);
    card.setAttribute("alt", item.alt);
    card.setAttribute("description", item.description);
    card.setAttribute("link", item.link);
    card.setAttribute("linktext", item.linkText);
    container.appendChild(card);
  });
}


window.addEventListener("DOMContentLoaded", () => {
  initLocalData();
});


document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('crudForm')) {
    let selectedIndex = -1;
    
    let selectedCard = null;
    function loadCrudData() {
      const data = JSON.parse(localStorage.getItem('myProjects')) || [];
      const container = document.getElementById('crudCardsContainer');
      container.innerHTML = '';
      
      data.forEach((item, index) => {
        const card = document.createElement('blog-card');
        card.setAttribute('title', item.title);
        card.setAttribute('img', item.img);
        card.setAttribute('alt', item.alt);
        card.setAttribute('description', item.description);
        card.setAttribute('link', item.link);
        card.setAttribute('linktext', item.linkText);
        
        card.addEventListener('click', () => {
          if (selectedCard) {
            selectedCard.classList.remove('selected');
          }
          card.classList.add('selected');
          selectedCard = card;
          selectedIndex = index;
          
          document.getElementById('title').value = item.title;
          document.getElementById('img').value = item.img;
          document.getElementById('alt').value = item.alt;
          document.getElementById('description').value = item.description;
          document.getElementById('link').value = item.link;
          document.getElementById('linkText').value = item.linkText;
          document.getElementById('btnUpdate').disabled = false;
          document.getElementById('btnDelete').disabled = false;
        });
        container.appendChild(card);
      });
    }
    
    document.getElementById('btnReadAll').addEventListener('click', loadCrudData);
    
    document.getElementById('btnCreate').addEventListener('click', () => {
      const data = JSON.parse(localStorage.getItem('myProjects')) || [];
      const newItem = {
        title: document.getElementById('title').value,
        img: document.getElementById('img').value,
        alt: document.getElementById('alt').value,
        description: document.getElementById('description').value,
        link: document.getElementById('link').value,
        linkText: document.getElementById('linkText').value
      };
      data.push(newItem);
      
      localStorage.setItem('myProjects', JSON.stringify(data));
      loadCrudData();
    });
    
    document.getElementById('btnUpdate').addEventListener('click', () => {
      if (selectedIndex < 0) return;
      
      const data = JSON.parse(localStorage.getItem('myProjects')) || [];
      data[selectedIndex] = {
        title: document.getElementById('title').value,
        img: document.getElementById('img').value,
        alt: document.getElementById('alt').value,
        description: document.getElementById('description').value,
        link: document.getElementById('link').value,
        linkText: document.getElementById('linkText').value
      };
      localStorage.setItem('myProjects', JSON.stringify(data));
      loadCrudData();
    });
    
    document.getElementById('btnDelete').addEventListener('click', () => {
      if (selectedIndex < 0) return;
      
      const data = JSON.parse(localStorage.getItem('myProjects')) || [];
      data.splice(selectedIndex, 1);
      localStorage.setItem('myProjects', JSON.stringify(data));
      selectedIndex = -1;
      
      selectedCard = null;
      document.getElementById('crudForm').reset();
      document.getElementById('btnUpdate').disabled = true;
      document.getElementById('btnDelete').disabled = true;
      loadCrudData();
    });
    
    loadCrudData();
  }
});
