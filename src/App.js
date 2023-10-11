import React, { Component } from "react";
//import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
//import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import { PageView, initGA } from "./Components/Tracking/index";


const d = {
  "main": {
    "name":"Zachary Beucler",
    "occupation":"Computer Science Student",
    "description":"I am passionate about building software and learning new technoligies. In my freetime, I research new concepts and topics in order to broaden my knowledge",
    "image":"profilepic.jpg",
    "bio":"Hi! I'm a Connecticut College recent grad with a major in Computer Science. I love any type of software development, especially computer vision, AI, machine learning, web development, and automation software. I am also a member of the Connecticut College Men's Varsity Swim Team where I specialize in long distance freestyle events. I also enjoy watching the NBA, NFL, and ISL (International Swimming League). Thanks for checking out my website!",
    "contactmessage":"Feel free to send me a message!",
    "email": "zbeucler@gmail.com",
    "phone": "978-809-0596",
    "address":{
      "city":"Boston Area",
      "state":"MA"
    },
    "social":[
      {
        "name":"linkedin",
        "url":"https://www.linkedin.com/in/zbeucler/",
        "className":"fa fa-linkedin"
      },
      {
        "name":"github",
        "url":"http://github.com/zbeucler2018",
        "className":"fa fa-github"
      },
      {
        "name":"AnglelList",
        "url":"https://angel.co/u/zachary-beucler",
        "className":"fa fa-angellist"
      },
      {
        "name":"HackerRank",
        "url":"https://www.hackerrank.com/zbeucler",
        "className":"fab fa-hackerrank"
      },
      {
        "name":"StackOverflow",
        "url":"https://stackoverflow.com/users/11307134/zack-beucler",
        "className":"fa fa-stack-overflow"
      }

    ]
  },
  "resume":{
    "skillmessage":"Here are some of my technical skills",
    "education":[
      {
        "school":"Connecticut Collegge",
        "degree":"Computer Science Major",
        "graduated":"Date of Graduation: May 2022",
        "description":"Four-year varsity athlete on the Men's Varsity Swim and Dive Team specializing in distance freestyle events."
      },
      {
        "school":"Andover Public High School",
        "degree":"High School Education",
        "graduated":"Date of Graduation: June 2018",
        "description":"Four-year varsity athlete on the Andover Public High School Varsity Swim and Dive Team. Senior Captian of Swim and Dive Team. "
      }
    ],
    "work":[
      {
        "company":"FieldNav",
        "companyURL":"https://fieldnav.io/",
        "title":"Software Development Intern",
        "years":"June 2021 - August 2021",
        "description":"At FieldNav, I developed three applications. The primary application was a low-code (or WYSIWYG) form builder application using React.js. This application allowed users to drag and drop elements to create an HTML form. Once the user finishes, the form is submitted to a Firebase Firestore database. I also developed a mobile application for viewing and submitting those forms using React Native. The mobile app also had the functionality of allowing users to view and complete forms while not connected to wifi or cellular networks. I also developed a proof of concept application that allowed my co-workers to easily add and delete users from a AWS Cognito User pool. For every application I created extensive documentation so that my co-workers could use and run the apps by themselves. For the low-code form builder, I also created a Docker container.",
        "techUsed":"React.js, React Native, Firebase, Docker, AWS cognito, Javascript, HTML, CSS"
      },
      {
        "company":"RevoluSun",
        "companyURL":"https://massachusetts.revolusun.com/",
        "title":"Web Development and Design Intern",
        "years":"May 2021 - June 2021",
        "description":"While interning at RevoluSun, I focused on improving the performance, accessability, and SEO of the company's WordPress website. I was able to decrease the average load time of 18+ pages on the mobile client by 1.13 seconds and 0.4 seconds on the Desktop client. While working on the SEO of the website, I realized that there was many broken links on the blog. Since going through every blog post and inspecting every link on a post is exausting, I developed a script to go through every blog post and report back broken links and their locations. I developed that script using Puppeteer and produced documentation for my colleagues to use. I was also able to redesign the Careers page to be more responsive and accessible.",
        "techUsed":"HTML, CSS, Javascript, WordPress, Filezilla, PHP"
      },
      {
        "company":"Lyniate",
        "companyURL":"https://www.lyniate.com/",
        "title":"IT Intern",
        "years":"December 2020 - January 2021",
        "description":"During my time at Lyniate, I worked with the IT and HR teams to create a 'Sunrise' New Hire application using Microsoft Power Apps, Sharepoint, and Microsoft Power Automate. This project ranged from requirement gathering to software development to quality control and data security in order to create a complete application. During my last week with Lyniate, I presented my 'Sunrise' application to the HR and IT department.",
        "techUsed":"Microsoft PowerApps, Microsoft Power Automate, Microsoft Sharepoint Lists"
      },
      {
        "company":"Adventure Networks",
        "companyURL":"https://www.linkedin.com/company/adventurenetworks/",
        "title":"Web Development Intern",
        "years":"May 2020 - June 2020",
        "description":"First I was tasked with studying the of fundamentals of blockchains and Ethereum. Then, I developed a web application with Node.js and React.js that allowed a user to transfer ERC 20 tokens from the Adventure Corporation API to the user's MetaMask wallet. After that, I was tasked with developing a Twitch Extension with Node.js and React.js that counts the amount of Twitch 'Emotes' viewers send into the Streamer's chat. The extension also displayed a live count of the emotes and the number of times that emote has been sent in the chat. I also developed a multiplayer speed typing game using React.js, Node.js, and Socket.io.",
        "techUsed":"HTML5, CSS, ReactJS, Node.js, Ethereum, Socket.io, MetaMask, HTML5, CSS, JavaScript"
      }
    ],
    "skills":[
      {
        "name":"Python",
        "level":"95%",
        "framework":""
      },
      {
        "name":"CSS",
        "level":"85%",
        "framework":""
      },
      {
        "name":"OpenCV",
        "level":"35%",
        "framework":""
      },
      {
        "name":"Matlab",
        "level":"85%",
        "framework":""
      },
      {
        "name":"ReactJs",
        "level":"80%",
        "framework":""
      },
      {
        "name":"HTML5",
        "level":"90%",
        "framework":""
      },
      {
        "name":"JavaScript",
        "level":"95%",
        "framework":""
      },
      {
        "name":"Git and Github",
        "level":"60%",
        "framework":""
      },
      {
        "name":"TypeScript",
        "level":"50%",
        "framework":""
      },
      {
        "name":"Java",
        "level":"40%",
        "framework":""
      },
      {
        "name":"Microsoft PowerApps",
        "level":"40%",
        "framework":""
      },
      {
        "name":"Node.js",
        "level":"40%",
        "framework":""
      },
      {
        "name":"Bash",
        "level":"45%",
        "framework":""
      }
    ]
  },
  "portfolio":{
    "projects": [
      {
        "title":"Local Food Finder",
        "category":"Find food around you using Yelp's Data API",
        "image":"YelpFoodFinder.png",
        "url":"https://github.com/zbeucler2018/Yelp-Clone"
      },
      {
        "title":"Reddit Content Farm",
        "category":"A script that creates video complations of TTS Reddit posts",
        "image":"RedditFarm.jpg",
        "url":"https://github.com/zbeucler2018/Reddit-Content-Farm"
      },
      {
        "title":"Matlab Vehical Brand Classifier",
        "category":"This app can classifiy different car brands based on HOG features and Bag-Of-Features.",
        "image":"carClassifier.jpeg",
        "url":"https://github.com/zbeucler2018/Classifying-Cars-By-Brand-with-Matlab"
      },
      {
        "title":"Zack's Pose Game",
        "category":"A interactive game inwhich the user is put into different poses to score points.",
        "image":"poseGame.png",
        "url":"https://github.com/zbeucler2018/Zacks-Pose-Game"
      },
      {
        "title":"Simple Perceptron From Scratch",
        "category":"A simple perceptron written from scratch in python",
        "image":"Perceptron.png",
        "url":"https://github.com/zbeucler2018/Perceptron-From-Scratch"
      },
      {
        "title":"AWS Cognito Userpool proof of concept",
        "category":"An app that allows the user to view, add, and delete users from a AWS Cognito userpool",
        "image":"aws-cognito.png",
        "url":"https://github.com/zbeucler2018/AWS-Cognito-Userpool-work"
      },
      {
        "title":"FieldNav Low-Code Form Builder",
        "category":"This app lets a user to create valid HTML forms by dragging and dropping elements",
        "image":"formBuilder.png",
        "url":"https://github.com/zbeucler2018/FieldNavFormBuilder"
      },
      {
        "title":"BlackJack",
        "category":"A GUI BlackJack game written in Python",
        "image":"PyBlackJack.png",
        "url":"https://github.com/zbeucler2018/BlackJack-Python"
      }

    ]
  },
  "testimonials":{
    "testimonials":[
      {
        "text":"Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",
        "user":"Kareem Abdul Jabbar"
      }
    ]
  }
}





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      data: "idk",
    };
    /*
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
    console.log(ReactGA.pageview(window.location.pathname));
    */
  }

  /*componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }*/
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  getResumeData() {
    $.ajax({
      url: "https://raw.githubusercontent.com/zbeucler2018/portfolio/master/public/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
    initGA("UA-188784392-1");
    PageView();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
