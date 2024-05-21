// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {itemDetails, isActive, onChangeLanguage} = props
  const {id, language} = itemDetails

  const changeLanguage = () => {
    onChangeLanguage(id)
  }

  const newClassName = isActive ? 'button-type' : 'text-type'

  return (
    <li>
      <button type="button" onClick={changeLanguage} className={newClassName}>
        <p>{language}</p>
      </button>
    </li>
  )
}
export default LanguageFilterItem
