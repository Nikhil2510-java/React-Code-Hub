
const SkillBars = (prop) => {
  return (
    <div>
        <div className="skill-container">
          <div className="skill-header">
            <span>{prop.skill}</span>
          </div>
          <div className="skill-bar">
            <div
              className="skill-fill"
              style={{ width: prop.percentage }}
            ></div>
          </div>
        </div>
    </div>
  );
};

export default SkillBars;
