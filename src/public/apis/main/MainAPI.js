import { PROJECT } from '../../../modules/main/MainState'

export function MainAPI(cetegoryId) {
  const mainUrl = 'http://localhost:8001/main?categoryId=' + cetegoryId

  return async function projectList(dispatch, getState) {
    const result = await fetch(mainUrl)
      .then((res) => res.json())
      .then((data) => data.results)
      .catch((err) => err)

    dispatch({ type: PROJECT, payload: result.projects })
  }
}
