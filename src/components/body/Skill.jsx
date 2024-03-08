import AddModeratorIcon from '@mui/icons-material/AddModerator';


const Skill = ({ theme, name, list, language }) => {
  const itemTextColor = theme === "Dark" ? "text-teal-400" : "text-orange-800";
  const getName = name => (language === "english" ? name.en : name.es);

  const icon = (
    <div className='text-center text-xl'>
      {name.en === "front-end" ? (
        <AddModeratorIcon />
      ) : name.en === "back-end" ? (
        <AddModeratorIcon />
      ) : name.en === "mobile" ? (
        <AddModeratorIcon />
      ) : name.en === "databases" ? (
        <AddModeratorIcon />
      ) : name.en === "tools" ? (
        <AddModeratorIcon />
      ) : (
        <AddModeratorIcon />
      )}
    </div>
  );

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
  );
};

export default Skill;
