import {Component} from 'react'
import Loader from 'react-loader-spinner'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apistatus = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}
// Write your code here
class GithubPopularRepos extends Component {
  state = {ids: languageFiltersData[0].id, repos: [], stat: apistatus.initial}

  componentDidMount() {
    this.getapi()
  }

  somethingWentWrong = () => {
    const a = 'A'
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt=""
          className="somethingWentwrongImage"
        />
        <h1 className="failureHead">Something Went Wrong</h1>
      </div>
    )
  }

  getapi = async () => {
    const {ids} = this.state
    this.setState({
      stat: apistatus.inprogress,
    })
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${ids}`,
    )
    if (response.ok === true) {
      const responseData = await response.json()

      const data = responseData.popular_repos
      const updatedData = data.map(each => ({
        avatarUrl: each.avatar_url,
        forksCount: each.forks_count,
        id: each.id,
        issuesCount: each.issues_count,
        name: each.name,
        starsCount: each.stars_count,
      }))
      console.log(ids)
      this.setState({
        repos: updatedData,
        stat: apistatus.success,
      })
    } else {
      this.setState({
        stat: apistatus.failure,
      })
    }
  }

  succesView = () => {
    const {repos} = this.state
    const a = 'A'
    return (
      <ul className="ul">
        {repos.map(each => (
          <RepositoryItem key={each.id} repo={each} />
        ))}
      </ul>
    )
  }

  loadingView = () => {
    const a = 'a'
    return (
      <div data-testid="loader" className="loaderCont">
        <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
      </div>
    )
  }

  LanguageClick = id => {
    console.log(id)
    this.setState(
      {
        ids: id,
      },
      this.getapi,
    )
  }

  renderView = () => {
    const {ids} = this.state
    return (
      <div className="LanguagesCont">
        <ul className="unListCont">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              CssClick={ids === each.id}
              ClickedOnLang={this.LanguageClick}
              lang={each}
              key={each.id}
            />
          ))}
        </ul>

        {this.renderFin()}
      </div>
    )
  }

  renderFin = () => {
    const {stat} = this.state
    switch (stat) {
      case apistatus.failure:
        return this.somethingWentWrong()
      case apistatus.inprogress:
        return this.loadingView()
      case apistatus.success:
        return this.succesView()

      default:
        return null
    }
  }

  render() {
    const a = 'a'
    return (
      <div className="main">
        <h1 className="head">Popular</h1>
        {this.renderView()}
      </div>
    )
  }
}
export default GithubPopularRepos
