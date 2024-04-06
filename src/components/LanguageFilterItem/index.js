// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {lang, ClickedOnLang, CssClick} = props
  const {language, id} = lang
  const langClick = () => {
    ClickedOnLang(id)
  }

  const ClassSpecial = CssClick && 'clickedCss'
  return (
    <li className="langContainer">
      <button
        onClick={langClick}
        className={`btnLang ${ClassSpecial}`}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
