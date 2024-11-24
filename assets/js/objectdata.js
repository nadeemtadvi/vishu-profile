const data = {
  header: {
    name: "Alex Smith",
    profileImage: "assets/img/my-profile-img.jpg",
    socialLinks: [
      { platform: "Twitter", icon: "bi bi-twitter-x", url: "#" },
      { platform: "Facebook", icon: "bi bi-facebook", url: "#" },
      { platform: "Instagram", icon: "bi bi-instagram", url: "#" },
      { platform: "Google Plus", icon: "bi bi-skype", url: "#" },
      { platform: "LinkedIn", icon: "bi bi-linkedin", url: "#" },
    ],
    navMenu: [
      {
        name: "Home",
        icon: "bi bi-house navicon",
        link: "#hero",
        active: true,
      },
      { name: "About", icon: "bi bi-person navicon", link: "#about" },
      {
        name: "Resume",
        icon: "bi bi-file-earmark-text navicon",
        link: "#resume",
      },
      { name: "Portfolio", icon: "bi bi-images navicon", link: "#portfolio" },
      { name: "Services", icon: "bi bi-hdd-stack navicon", link: "#services" },
      { name: "Contact", icon: "bi bi-envelope navicon", link: "#contact" },
    ],
  },
  hero: {
    name: "Alex Smith",
    image: "assets/img/hero-bg.jpg",
    roles: ["Designer", "Developer", "Freelancer", "Photographer"],
  },
  about: {
    title: "About",
    description:
      "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.",
    profileImage: "assets/img/my-profile-img.jpg",
    details: {
      profession: "UI/UX Designer & Web Developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      attributes: [
        { label: "Birthday", value: "1 May 1995" },
        { label: "Website", value: "www.example.com" },
        { label: "Phone", value: "+123 456 7890" },
        { label: "City", value: "New York, USA" },
        { label: "Age", value: "30" },
        { label: "Degree", value: "Master" },
        { label: "Email", value: "email@example.com" },
        { label: "Freelance", value: "Available" },
      ],
      additionalInfo:
        "Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut.",
    },
  },
  stats: [
    {
      icon: "bi bi-emoji-smile",
      count: 232,
      label: "Happy Clients",
      subtitle: "consequuntur quae",
    },
    {
      icon: "bi bi-journal-richtext",
      count: 521,
      label: "Projects",
      subtitle: "adipisci atque cum quia aut",
    },
    {
      icon: "bi bi-headset",
      count: 1453,
      label: "Hours Of Support",
      subtitle: "aut commodi quaerat",
    },
    {
      icon: "bi bi-people",
      count: 32,
      label: "Hard Workers",
      subtitle: "rerum asperiores dolor",
    },
  ],
  skills: [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 75 },
    { name: "PHP", level: 80 },
    { name: "WordPress/CMS", level: 90 },
    { name: "Photoshop", level: 55 },
  ],
  resume: {
    title: "Resume",
    description:
      "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    summary: {
      name: "Brandon Johnson",
      description:
        "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
      contact: {
        address: "Portland par 127, Orlando, FL",
        phone: "(123) 456-7891",
        email: "alice.barkley@example.com",
      },
    },
    education: [
      {
        degree: "Master of Fine Arts & Graphic Design",
        year: "2015 - 2016",
        institution: "Rochester Institute of Technology, Rochester, NY",
        details:
          "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
      },
      {
        degree: "Bachelor of Fine Arts & Graphic Design",
        year: "2010 - 2014",
        institution: "Rochester Institute of Technology, Rochester, NY",
        details:
          "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila",
      },
    ],
    experience: [
      {
        title: "Senior graphic design specialist",
        year: "2019 - Present",
        company: "Experion, New York, NY",
        responsibilities: [
          "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
          "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
          "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
          "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
        ],
      },
      {
        title: "Graphic design specialist",
        year: "2017 - 2018",
        company: "Stepping Stone Advertising, New York, NY",
        responsibilities: [
          "Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements)",
          "Managed up to 5 projects or tasks at a given time while under pressure",
          "Recommended and consulted with clients on the most appropriate graphic design",
          "Created 4+ design presentations and proposals a month for clients and account managers",
        ],
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    description:
      "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    filters: ["All", "App", "Product", "Branding", "Books"],
    items: [
      {
        category: "App",
        title: "App 1",
        description: "Lorem ipsum, dolor sit amet consectetur",
        image: "assets/img/portfolio/app-1.jpg",
        detailsLink: "portfolio-details.html",
      },
      {
        category: "Product",
        title: "Product 1",
        description: "Lorem ipsum, dolor sit amet consectetur",
        image: "assets/img/portfolio/product-1.jpg",
        detailsLink: "portfolio-details.html",
      },
      {
        category: "Branding",
        title: "Branding 1",
        description: "Lorem ipsum, dolor sit amet consectetur",
        image: "assets/img/portfolio/branding-1.jpg",
        detailsLink: "portfolio-details.html",
      },
      // Additional portfolio items can be added here following the same structure
    ],
  },
  services: {
    title: "Services",
    description:
      "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    items: [
      {
        title: "Lorem Ipsum",
        description:
          "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        icon: "bi bi-briefcase",
      },
      {
        title: "Dolor Sitema",
        description:
          "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
        icon: "bi bi-card-checklist",
      },
      {
        title: "Sed ut perspiciatis",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        icon: "bi bi-bar-chart",
      },
      // Additional services can be added here following the same structure
    ],
  },
  testimonials: [
    {
      quote:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      name: "Saul Goodman",
      position: "Ceo & Founder",
      image: "assets/img/testimonials/testimonials-1.jpg",
    },
    {
      quote:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      name: "Sara Wilsson",
      position: "Designer",
      image: "assets/img/testimonials/testimonials-2.jpg",
    },
    {
      quote:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      name: "Jena Karlis",
      position: "Store Owner",
      image: "assets/img/testimonials/testimonials-3.jpg",
    },
    {
      quote:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      name: "Matt Brandon",
      position: "Freelancer",
      image: "assets/img/testimonials/testimonials-4.jpg",
    },
    {
      quote:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      name: "John Larson",
      position: "Entrepreneur",
      image: "assets/img/testimonials/testimonials-5.jpg",
    },
  ],
  contactInfo: {
    address: {
      title: "Address",
      details: "A108 Adam Street, New York, NY 535022",
      icon: "bi bi-geo-alt",
    },
    phone: {
      title: "Call Us",
      details: "+1 5589 55488 55",
      icon: "bi bi-telephone",
    },
    email: {
      title: "Email Us",
      details: "info@example.com",
      icon: "bi bi-envelope",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus",
  },
  formLabels: {
    name: "Your Name",
    email: "Your Email",
    subject: "Subject",
    message: "Message",
    submitButton: "Send Message",
  },
  footer: {
    text: "© Copyright All Rights Reserved",
    designerCredit: {
      text: "Designed by Me",
      url: "https://bootstrapmade.com/",
    },
  },
};
