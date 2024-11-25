import SkillsCloud from "./SkillsCloud";
import Testimonial from "./Testimonial";

function About() {
    return (
        <div id="about">
          <div id="intro">
            <a href="https://www.linkedin.com/in/ryker-reed/"> <img src="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/468367632_10164089490518998_1761629195266741077_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=9DkCknFkQ9AQ7kNvgGZYUOJ&_nc_zt=23&_nc_ht=scontent-bos5-1.xx&_nc_gid=AxneaHG8jvdhh6AulqY2Ep7&oh=00_AYA0QnSRtrH0JB82iEABoXbOa2GAXP1eBt4ZYWf3CG0scg&oe=6749BAAB"/> </a>
            <p>Hi, I'm Ryker! I'm a software engineer who's passionate about life-long learning and creating beautiful and meaningful things to help others. Welcome to my portfolio! I've got a wide range of accomplishments and skills which would make me a valuable member of any team. Have a look around and don't hesitate to reach out through my contact page! </p>
          </div>
  
          <div id="skills-cloud">
            <h1>Skills</h1>
            <SkillsCloud
              topSkills={["JavaScript", "React", "Ruby on Rails", "HTML", "CSS"]}
              middleSkills={["jQuery", "AJAX", "PostgreSQL", "SQLite", "ActiveRecord"]}
              bottomSkills={["Python", "Node.js", "AWS Lambda", "Action Cable"]}
            />
          </div>
  
          <div id="testimonials">
            <h1>Testimonials</h1>
  
            <Testimonial
              name="Maria Uyeda"
              dialog="Ryker is an intelligent developer whose strength lies in his ability to solve complex problems through programming. He uses his vast understanding of algorithms and logic to creatively design products with a beautiful front-end and a clean back-end. I have worked on several teams with Ryker and witnessed his dedication for building meaningful programs that promote a more equal and just society. I would gladly work with Ryker again because of his programming expertise and his ability to bring a team together through strong leadership!"
              headshot="https://media.licdn.com/media/AAEAAQAAAAAAAAd9AAAAJDE0YzI2YzBiLTI1NGUtNDAzMy04MTMxLWFjNzI3NzU5YmQzMg.jpg"
              linkedin="https://www.linkedin.com/in/maria-uyeda/"
              textSide="left"
            />
  
            <Testimonial
              name="Jim Lengel"
              dialog="I worked with Ryker on an intensive 2-week project when we were students at Dev Bootcamp. What impressed me most about Ryker was his ability to problem solve quickly and methodically. We were implementing a new feature in Rails (Action Cable) and he was able to read the limited documentation and get the feature working in a short period of time. Also, on our team, we had rotating project managers. When it was Ryker’s turn as manager, the team worked smoothly and communication was optimal. Everyone felt extremely confident in Ryker’s ability to lead our team. Ryker is intelligent, insightful, humble, and persistent. His work throughout the Dev Bootcamp program stood out as some of the best code of the group and he was always willing to explain difficult concepts to his cohort members. I would happily work on another project with Ryker in the future."
              headshot="https://media.licdn.com/media/AAEAAQAAAAAAAAcyAAAAJGFkMmVmZjc1LTk3MGItNGEyMS1iODRiLTMxNzQ2NGUwYmZjMQ.jpg"
              linkedin="https://www.linkedin.com/in/jimlengel/"
              textSide="right"
            />
  
            <Testimonial
              name="Frank Aiello"
              dialog="Ryker is a talented thinker who uses his sharp analytic skills to solve intricate problems. I worked with Ryker on building a web application that required him and me to research and implement a feature that used an alternative type of computer communications protocol that we were both previously unfamiliar with. Ryker and I spent days rethinking everything we had learned about how the Internet works, and in the process he demonstrated to me how to reason through novel problems by breaking them down into smaller parts and rigorously testing potential solutions to them. Ryker showed me through example how to explain structurally complex ideas to people on our team, and to this day I often recall the eloquence with which Ryker deconstructed issues in order to communicate them with people. His ability to do so makes him a valuable member of any team, not exclusively as a software engineer, but as a refreshingly unique thinker eager to take on problems through the lens of emerging alternatives."
              headshot="https://media.licdn.com/media/AAEAAQAAAAAAAAhDAAAAJDBiMjVmYWFhLWM3NzItNDE3Yy1hY2QyLWZjZGNiM2YyMGI3OA.jpg"
              linkedin="https://www.linkedin.com/in/frank-aiello-eyeyellow/"
              textSide="left"
            />
          </div>
  
        </div>
      );
}

export default About;