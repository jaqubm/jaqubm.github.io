import BorderBox from "./ui/BorderBox.tsx"
import Title from "./ui/Title.tsx"
import SkillInfo from "./ui/SkillInfo.tsx"

const SkillInfos = () => (
  <>
    <BorderBox>

      <Title>
        Skills
      </Title>

      <div className="space-y-7 mb-1">

        <SkillInfo 
        skill="C# / .NET" 
        progress={ 45 } />

        <SkillInfo 
        skill=".NET Core" 
        progress={ 35 } />

        <SkillInfo 
        skill="MS SQL" 
        progress={ 30 } />

        <SkillInfo 
        skill="C / C++" 
        progress={ 30 } />

        <SkillInfo 
        skill="Python" 
        progress={ 25 } />

        <SkillInfo 
        skill="Scala" 
        progress={ 25 } />

        <SkillInfo 
        skill="Java" 
        progress={ 25 } />

        <SkillInfo 
        skill="React" 
        progress={ 20 } />

        <SkillInfo 
        skill="TypeScript" 
        progress={ 20 } />

      </div>

    </BorderBox>
  </>
)

export default SkillInfos