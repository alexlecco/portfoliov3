import { useState } from "react"
import './App.css'

// dependencies
import * as Scroll from "react-scroll"
import { useTranslation } from "react-i18next"

// constants
import { user } from './react-portfolio'

// components
import Presentation from "./components/Presentation"
import GoalsContainer from "./components/body/GoalsContainer"
import SkillsContainer from "./components/body/SkillsContainer"

let Element = Scroll.Element
let scroller = Scroll.scroller

function App() {
  const [language, setLanguage] = useState("english")
  const [theme, setTheme] = useState("Dark")
  const { t, i18n } = useTranslation("common")

  const changeTheme = () => {
    setTheme(theme === "Dark" ? "Light" : "Dark")
  }

  const changeLanguage = lang => {
    i18n.changeLanguage(lang === "english" ? "es" : "en")
    setLanguage(lang === "english" ? "spanish" : "english")
  }

  const {
    avatar,
    flag,
    name,
    city,
    country,
    birthday,
    phone,
    email,
    profile,
    coverdark,
    coverlight,
    goals,
    studies,
    experience,
    mentoring,
    skills,
    languages,
    social,
    claps,
  } = user

  return (
    <div className='bg-fixed bg-center bg-cover md:pr-48 md:pl-48 select-none md:select-text'
      style={{
        backgroundImage: `url(${theme === "Dark" ? coverdark : coverlight})`,
      }}
    >
      <div className={`bg-transparent text-center min-h-screen`}>
        <Presentation
          avatar={avatar}
          flag={flag}
          name={name}
          city={city}
          country={country}
          birthday={birthday}
          phone={phone}
          email={email}
          profile={profile}
          theme={theme}
          changeTheme={changeTheme}
          changeLanguage={changeLanguage}
          language={language}
          scroller={scroller}
          social={social}
          claps={claps}
          goals={goals}
          studies={studies}
          skills={skills}
          languages={languages}
          experience={experience}
          mentoring={mentoring}
          t={t}
        />

        <Element name='goalsElement'>
          <GoalsContainer theme={theme} goals={goals} t={t} language={language} />
        </Element>

        <Element name='skillsElement'>
          <SkillsContainer theme={theme} skills={skills} t={t} language={language} />
        </Element>

      </div>
    </div>
  )
}

export default App
