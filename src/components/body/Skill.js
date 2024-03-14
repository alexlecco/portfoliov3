import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Skill = ({ theme, name, list, language }) => {
  const itemTextColor = theme === "Dark" ? "text-teal-400" : "text-orange-800"
  const getName = name => (language === "english" ? name.en : name.es)

  const icon = (
    <div className='text-center text-xl'>
      {name.en === "front-end" ? (
        <DesktopWindowsIcon />
      ) : name.en === "back-end" ? (
        <CodeIcon />
      ) : name.en === "mobile" ? (
        <PhoneIphoneIcon />
      ) : name.en === "databases" ? (
        <StorageIcon />
      ) : name.en === "tools" ? (
        <BuildIcon />
      ) : (
        <MenuBookIcon />
      )}
    </div>
  )

  return (
    <div className={`my-8 flex w-full md:w-1/3`}>
      <div className='w-full md:text-left md:mx-6'>
        {icon}
        <h3 className='text-xl text-center'>{getName(name)}</h3>
        <div
          className={`${itemTextColor} flex flex-col justify-center text-center px-2 py-2 md:px-0`}
        >
          {list.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill
