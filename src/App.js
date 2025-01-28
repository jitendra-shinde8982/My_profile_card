import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profile_pic.jpg" alt="jitendra shinde" />;
}

function Intro() {
  return (
    <div>
      <h1>Jitendra Shinde</h1>
      <p>
        Front-end Developer with 2 years of experience creating responsive and
        user-friendly interfaces for ERP and CRM software. Skilled in HTML, CSS,
        JavaScript, Angular, and React, with a focus on building modern,
        scalable designs. Experienced in team collaboration and proficient with
        tools like Git to deliver high-quality w applications.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill Name="HTML5+CCS3" emoji="😇" color="red"/>
      <Skill Name="JavaScript" emoji="👿" color="yellow"/>
      <Skill Name="React" emoji="👊🏻" color="cyan"/>
      <Skill Name="Jquery" emoji="👻" color="blue"/>
      <Skill Name="Tailwind" emoji="🥵" color="pink"/>
      <Skill Name="Bootstrap" emoji="🤡" color="green"/>

    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{background:props.color}}>
      <span>{props.Name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
export default App;
