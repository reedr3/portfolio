interface SkillsCloudProps {
    topSkills: string[];
    middleSkills: string[];
    bottomSkills: string[];
}

function SkillsCloud({topSkills, middleSkills, bottomSkills}: SkillsCloudProps) {
    return (
        <div>
          <div id="top-skills" className="skill-group">
            {topSkills.map(function(skillName, index) {
              return <p key={index}> {skillName} </p>
            })}
          </div>
          <div id="middle-skills" className="skill-group">
            {middleSkills.map(function(skillName, index) {
              return <p key={index}> {skillName} </p>
            })}
          </div>
          <div id="bottom-skills" className="skill-group">
            {bottomSkills.map(function(skillName, index) {
              return <p key={index}> {skillName} </p>
            })}
          </div>
        </div>
      );
}

export default SkillsCloud;