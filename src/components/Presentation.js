import { useState, useEffect } from "react"
import GetAppIcon from "@mui/icons-material/GetApp";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import NavigatorMenu from "./NavigatorMenu"
import { PDFDownloadLink } from "@react-pdf/renderer"
import PdfStructure from "../pdf/PdfStructure"
import database from "../firebase"

const Presentation = ({
  flag,
  avatar,
  name,
  city,
  country,
  birthday,
  phone,
  email,
  profile,
  description,
  theme,
  changeTheme,
  changeLanguage,
  language,
  scroller,
  social,
  claps,
  goals,
  studies,
  skills,
  languages,
  experience,
  mentoring,
  t,
}) => {
  const [localClaps, setLocalClaps] = useState(claps)

  const profileTextColor = theme === "Dark" ? "text-teal-400" : "text-orange-900"
  const clapsText = `${claps} ${t("topbar.button3")}`
  const getMyResumeText = t("topbar.button4")

  useEffect(() => {
    const userRef = database.ref().child("data").child("claps")
    userRef.set(localClaps)
  }, [localClaps])

  const handleChangeLanguage = () => {
    changeLanguage(language)
  }

  const incrementClaps = () => {
    setLocalClaps(claps + 1)
  }

  const getStringYear = () => {
    const today = new Date(Date.now())
    const year = today.toString().substring(11, 15)

    return year
  }

  const year = getStringYear()

  const userData = {
    language,
    name,
    city,
    country,
    birthday,
    phone,
    email,
    social,
    profile,
    goals,
    studies,
    skills,
    languages,
    experience,
    mentoring,
  }

  return (
    <div className='h-screen md:flex md:flex-col md:justify-around'>
      <div className={`${theme}-transparent flex justify-between`}>
        <div className='flex flex-row'>
          <div
            className='flex flex-col items-center p-8 w-20 h-20 md:mr-2'
            onClick={changeTheme}
          >
            <Brightness4Icon
              fontSize='small'
              className='theme cursor-pointer'
            />
          </div>
          <div
            className='flex flex-col items-center p-6 mt-1 w-20 h-20'
            onClick={handleChangeLanguage}
          >
            <p className='cursor-pointer language noselect' >
              {language === "english" ? "EN" : "ES"}
            </p>
          </div>
        </div>
        <div className='flex flex-row'>
          <div
            className='flex flex-col items-center p-7 w-24 h-20 md:mr-2'
            onClick={incrementClaps}
          >
            <img
              src='https://cdn4.iconfinder.com/data/icons/hand-touch-gesture/64/hand_touch_gesture_claps_applause_apreciation-512.png'
              alt='clap'
              className={`cursor-pointer claps clap-img ${
                theme === "Dark" ? "filter-inverse" : null
              }`}
            />
            <p className='flex-row md:inline noselect text-sm mt-3'>
              {clapsText}
            </p>
          </div>
          <div
            className='p-8 w-20 h-20'
          >
            <PDFDownloadLink
              document={<PdfStructure data={userData} t={t} />}
              fileName={`alex-resume-${year}.pdf`}
              className='flex flex-col items-center'
            >
              <GetAppIcon fontSize='small' className='resume cursor-pointer' />
              <p className='md:inline noselect text-sm mt-2'>
                {getMyResumeText}
              </p>
            </PDFDownloadLink>
          </div>
        </div>
      </div>
      <div className='md:flex p-6 md:pb-24 md:h-64'>
        <div className='flex justify-center md:justify-end md:w-1/2 md:items-center presentation__left'>
          <img
            className='w-32 md:w-64 rounded-full mx-auto md:mx-0 items-center image__left'
            src={avatar}
            alt='avatar'
          />
        </div>
        <div>
          <div className='md:h-20 flex-none flex flex-row justify-between w-64 md:w-full mx-auto p-2 md:mb-3'>
            <img src={flag} className="w-12 h-12 md:w-10 md:h-10 my-auto md:mr-3" alt="flag" />
            <div className={'my-auto text-center'}>
              <h2 className={`text-3xl ${theme}-transparent`}>{name}</h2>
            </div>
          </div>
          <div className={`text-lg ${profileTextColor} mb-4`}>{profile}</div>
          <div className='flex justify-center align-center'>
            {social &&
              social.map((socNetwork, index) => (
                // eslint-disable-next-line react/jsx-no-target-blank
                <a href={socNetwork.url} target='_blank' key={index}>
                  <img
                    src={socNetwork.icon}
                    className='w-16 px-2'
                    alt={socNetwork.name}
                  />
                </a>
              ))}
          </div>
          <h3 className='text-sm font-hairline md:text-lg md:w-3/4'>
            {description}
          </h3>
        </div>
      </div>
      <NavigatorMenu theme={theme} scroller={scroller} t={t} />
    </div>
  )
}

export default Presentation
