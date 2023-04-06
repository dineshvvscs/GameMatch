import './index.css'

const TabItem = props => {
  const {details, isClicked, onChangeTab} = props
  const {displayText, tabId} = details
  const changeTab = () => {
    onChangeTab(tabId)
  }

  const styleButton = isClicked ? 'tabButtonClicked' : ''
  return (
    <li className="liELement">
      <button
        onClick={changeTab}
        className={`tabButton ${styleButton}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
