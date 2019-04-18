import axios from 'axios';
import { LOG_USER, changeLoginMessage } from './reducer';

const ajaxMiddleware = store => next => (action) => {

  const fetchGithubApi = url => {
    const token = store.getState().token;
    return axios.get(url, {
      headers: {
        Authorization: `token ${token}`,
      }
    });
  }


  switch (action.type) {
    case LOG_USER:
      next(action);
      const url = 'https://api.github.com/user';
      fetchGithubApi(url)
        .then(response => {
          // Dans response.data je reçois les infos de l'user connecté
          const user = response.data;
          const message = `Fetching repos for user ${user.login}`;
          store.dispatch(changeLoginMessage(message));
          // J'ai reçu l'user, je veux donc récupérer ses repos
          fetchGithubApi('https://api.github.com/user/repos')
            .then(response => {
              const userRepos = response.data;
              const messageRepos = `Hey ${user.login}, we received ${userRepos.length} repos from your account`;
              store.dispatch(changeLoginMessage(messageRepos));
            })
            .catch(error => {

            })

        })
        .catch(error => {
          // L'erreur si jamais token non valide
        })
    break;
    default:
      next(action);
      break;
  }
};

export default ajaxMiddleware;
