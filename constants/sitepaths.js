export const BASE_URL = "https://www.signumadvocates.com";

export const sitePaths = {
  Home: {
    path: "/",
    name: "Home",
    longDesc: "Official Home site for Signum Advocates",
    shortDesc: "",
  },
  AboutUs: {
    path: "/about",
    name: "About",
    longDesc:
      "We are a young and dynamic law firm that is passionate about providing our clients with exceptional legal services.  Our team consists of highly skilled and experienced lawyers who are committed to achieving the best possible outcomes for our clients.",
    shortDesc:
      "We are a young and dynamic law firm that is passionate about providing our clients with exceptional legal services.  Our team consists of highly skilled and experienced lawyers committed to achieving the best for our clients.",
  },
  Practices: {
    path: "/practices",
    name: "Practices",
    longDesc:
      "Our areas of expertise include Tax Advisory, Banking & Finance, Litigation & dispute resolution, and others as showed below in detail. We are dedicated to staying up-to-date with the latest developments and trends in these fields.",
    shortDesc:
      "Our areas of expertise include Tax Advisory, Banking & Finance, Litigation & dispute resolution, and others as showed below in detail. We are dedicated to staying up-to-date with the latest developments and trends.",
  },
  Team: {
    path: "/team",
    name: "Team",
    longDesc:
      "Find information about the talented and experienced individuals who make up our team. Our lawyers are passionate about providing our clients with exceptional legal services, and they bring a wealth of experience and knowledge to every case they handle.",
    shortDesc:
      "Our passionate and experienced lawyers provide exceptional legal services, bringing extensive knowledge and expertise to each case. Trust our dedicated team for personalized solutions and optimal results.",
  },
  Publications: {
    hide: true,
    path: "/publications",
    name: "Publications",
    longDesc:
      "Find a collection of articles, blog posts, and other publications that our team of lawyers have authored. We believe that sharing knowledge and insights is an essential part of being a successful legal practice. We strive to make our content accessible and easy to understand.",
    shortDesc:
      "Find a collection of articles and other publications that our team of lawyers have authored. We believe that sharing knowledge and insights is an essential part of being a successful legal practice.",
  },
  CSR: {
    hide: true,
    path: "/csr",
    name: "CSR",
    longDesc:
      "We are committed to being socially responsible and contributing to the betterment of society. On this page, you will find information about the various initiatives and activities we undertake as part of our CSR efforts.",
    shortDesc:
      "We are committed to being socially responsible and contributing to the betterment of society. On this page, you will find information about the various initiatives and activities we undertake as part of our CSR efforts.",
  },
  Careers: {
    path: "/careers",
    name: "Careers",
    longDesc:
      "Find information about any current job openings at Signum Advocates, as well as details about the application process and what you can expect when working with us. We encourage you to explore our website and learn more about our profiencies and the values that guide our work.",
    shortDesc:
      "Find information about any current job openings at Signum Advocates, as well as details about the application process and what you can expect when working with us.",
  },
  ContactUs: {
    path: "/contactUs",
    name: "Contact Us",
    longDesc:
      "We value your interest in our services and are here to assist you with any inquiries or legal needs you may have. Contacting us is easy. Reach out to our team through the various channels provided below, and we will be delighted to respond promptly and provide the help you require.",
    shortDesc:
      "Contacting us is easy. You can reach out to our team through the various channels provided below, and we will be delighted to respond promptly.",
  },
};

export const pathsArray = Object.keys(sitePaths).map((path) => {
  return {
    hide: !!sitePaths[path].hide,
    name: sitePaths[path].name,
    path: sitePaths[path].path,
    icon: sitePaths[path].icon,
    longDesc: sitePaths[path].longDesc,
    shortDesc: sitePaths[path].shortDesc,
    id: `${sitePaths[path].name}_${sitePaths[path].path}`,
  };
});
