import ProgressBar from "./ProgressBar"

type SkillProps = {
  skill: string;
  progress: number;
}

const SkillInfo = ({ skill, progress } : SkillProps) => (
  <div className="w-full flex items-center">

    <h1 className="w-28">
      { skill }
    </h1>

    <ProgressBar progress={progress} />
    
  </div>
)

export default SkillInfo