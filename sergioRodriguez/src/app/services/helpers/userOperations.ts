import { BaseGithubUser } from 'src/app/redux/models/user.model';
import { Repository, ResumeRepositories } from 'src/app/redux/models/repository.model';

const initialState: ResumeRepositories = {
  open_issues: 0,
  size: 0,
  forks: 0
}

export const getUserByLogin = (users: BaseGithubUser[], login: string) => {
  return users.find((user: BaseGithubUser) => user.login === login);
}

export const getResumeRepositoriesByUser = (repositories: Repository[]) => {
  return repositories.reduce((map, currentValue) => ({
      ...map,
      'open_issues': (map['open_issues']) + currentValue.open_issues,
      'size': (map['size']) + currentValue.size,
      'forks': (map['forks']) + currentValue.forks,
  }), initialState);
}