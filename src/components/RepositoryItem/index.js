// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} =
    repositoryDetails
  return (
    <li className="list-item">
      <img src={avatarUrl} className="image" alt={name} />
      <h1 className="repository-name">{name}</h1>
      <div className="item-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="star-icon"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="item-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="star-icon"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="item-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="star-icon"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
