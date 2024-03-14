import useWindowWidth from "../hooks/useWindowWidth"

function NavigatorMenu({ theme, scroller, t }) {
  const { width } = useWindowWidth()
  const MIN_WIDTH_SIZE = 768

  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }

  return (
    <>
      {width < MIN_WIDTH_SIZE ? (
        <ul className={`${theme}-transparent md:flex md:flex-row md:justify-center md:align-middle md:pb-8`} >
          <li className='md:pr-28 py-2 my-2 md:pb-0 cursor-pointer'>
            <p
              className='mb-2 background-shadow'
              onClick={() => scrollToElement("goalsElement")}
            >
              {t("presentation.item1")}
            </p>
          </li>
          <li className='md:pr-28 py-2 my-2 md:pb-0 cursor-pointer'>
            <p onClick={() => scrollToElement("skillsElement")}>
              {t("presentation.item2")}
            </p>
          </li>
          <li className='md:pr-28 py-2 my-2 md:pb-0 cursor-pointer'>
            <p onClick={() => scrollToElement("experienceElement")}>
              {t("presentation.item3")}
            </p>
          </li>
          <li className='md:pr-28 py-2 my-2 md:pb-0 cursor-pointer'>
            <p onClick={() => scrollToElement("portfolioElement")}>
              {t("presentation.item4")}
            </p>
          </li>
          <li className='py-2 my-2 md:pb-0 cursor-pointer'>
            <p onClick={() => scrollToElement("contactElement")}>
              {t("presentation.item5")}
            </p>
          </li>
        </ul>
      ) : (
        <ul
          className={`${theme}-transparent md:flex md:flex-row md:justify-center md:align-middle md:pb-8`}
        >
          <li className='md:pr-28 pb-10 md:pb-0 cursor-pointer'>
            <p className='' onClick={() => scrollToElement("goalsElement")}>
              {t("presentation.item1")}
            </p>
          </li>
          <li className='md:pr-28 pb-10 md:pb-0 cursor-pointer'>
            <p onClick={() => scrollToElement("skillsElement")}>
              {t("presentation.item2")}
            </p>
          </li>
          <li className='md:pr-28 pb-10 md:pb-0 cursor-pointer'>
            <p onClick={() => scrollToElement("experienceElement")}>
              {t("presentation.item3")}
            </p>
          </li>
          <li className='md:pr-28 pb-10 md:pb-0 cursor-pointer'>
            <p onClick={() => scrollToElement("portfolioElement")}>
              {t("presentation.item4")}
            </p>
          </li>
          <li className='pb-10 md:pb-0 cursor-pointer'>
            <p onClick={() => scrollToElement("contactElement")}>
              <span className='no-select'>{t("presentation.item5")}</span>
            </p>
          </li>
        </ul>
      )}
    </>
  )
}

export default NavigatorMenu
