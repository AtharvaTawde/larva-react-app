import React from "react";
import "../App.css";
import me from "../assets/images/me.jpg";

export default function Home(props) {
  return (
    <div
      className="section"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingBottom: "50px",
      }}
    >
      <img
        alt="Atharva Tawde"
        src={me}
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "15px",
          marginRight: "20px",
          border: "2px dashed white",
        }}
      ></img>
      <div>
        <h3>Hello! My name is Atharva Tawde.</h3>
        <p>
          Since the age of ten, I have immersed myself into every piece of
          technology that has entered my household. I love to take courses on
          various computer programming languages on Coursera, Udemy, Codecademy
          and programming classes in school. I am fluent in around 8 programming
          languages, spanning Python, C#, Java, JavaScript, HTML, CSS and so on.
          Through Google's courses, I have earned various certifications dealing
          with Python, GitHub and automated scripting. I have also competed in a
          programming contest, and ranked 6th place out of the 75 participants.
          I participated in this contest through an organization called
          Codeforces. Competitive programming was relatively a new experience
          for me, and I seemed to enjoy it as it seemed that I worked better
          under stressful conditions (since the rounds were timed).
        </p>
        <br />
        <p>
          To level up my software engineering skills, I interned and am now
          working fulltime at a small student-based startup called Revoteen,
          which makes a platform for teens to interact with remote organizations
          and initiatives globally (with 4300+ active users). I also have
          immersed myself in Web and App Development, working on my own apps to
          publish in the app marketplaces one day. I also love to mesh
          technology with other subject areas, especially in the various
          teaching positions I have. Although teaching kids to program in Python
          necessitates technology, I strive to also bring programming to a
          reading program called Funetix, where I have developed a web-resource
          for kids to use to review the complex Funetix alphabet. (It won't make
          sense to regular people, only those who learn under me at Funetix, but
          here is a WIP of it:{" "}
          <a
            href="https://funetix-links.vercel.app/"
            target="_blank"
            style={{ color: props.darkMode ? "white" : "black" }}
          >
            Funetix Links
          </a>
          )
        </p>
        <br />
        <p>
          Some personal strengths I have are basic leadership skills and team
          management. I strengthened these in team events like various Math
          Olympiads over the years and robotics projects I have done in the
          Robotics Club of Dublin High School. This skills also show throughout
          my years of being in various engineering courses throughout middle
          school and high school. I am a 12th grader, which means that I have
          learned a few things about myself so far. This includes that I have a
          passion for computer related engineering and that I can grasp new
          concepts fairly well, whether it is related to engineering or not,
          although I like to absorb new things about technology a lot more
          efficiently because of my interests in that particular field.
        </p>
      </div>
    </div>
  );
}
