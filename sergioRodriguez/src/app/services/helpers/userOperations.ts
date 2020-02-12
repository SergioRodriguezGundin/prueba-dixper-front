import { BaseGithubUser } from 'src/app/redux/models/user.model';
import { Repository, ResumeRepositories } from 'src/app/redux/models/repository.model';

export const getUserByLogin = (users: BaseGithubUser[], login: string) => {
  return users.find((user: BaseGithubUser) => user.login === login);
}

export const getResumeRepositoriesByUser = (repositories: Repository[]) => {
  const resumeRepositories: ResumeRepositories = {
    open_issues: 0,
    size: 0,
    forks: 0
  }

  const total: ResumeRepositories = repositories.reduce((map, currentValue) => ({
      ...map,
      [currentValue.open_issues]: (map[currentValue.open_issues]) + currentValue.open_issues,
      [currentValue.size]: (map[currentValue.size]) + currentValue.size,
      [currentValue.forks]: (map[currentValue.forks]) + currentValue.forks,
  }), resumeRepositories);

  console.log(total);
}