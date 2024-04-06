// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repo} = props
  const {starsCount, id, issuesCount, forksCount, avatarUrl, name} = repo
  return (
    <li className="containerItem">
      <img src={avatarUrl} className="imageRepo" alt={name} />
      <h1 className="name">{name}</h1>
      <div>
        <div className="star-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="starimg"
          />
          <p>{starsCount} stars</p>
        </div>
        <div className="star-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="starimg"
          />
          <p>{forksCount} forks</p>
        </div>
        <div className="star-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="starimg"
          />
          <p>{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
