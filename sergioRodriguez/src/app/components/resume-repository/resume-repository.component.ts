import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { getResumeRepositoriesByUser } from 'src/app/services/helpers/userOperations'
import { ResumeRepositories, Repository } from 'src/app/redux/models/repository.model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import * as fromUsers from 'src/app/redux/reducers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resume-repository',
  templateUrl: './resume-repository.component.html',
  styleUrls: ['./resume-repository.component.scss']
})
export class ResumeRepositoryComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>) { }

  private repositoriesSubscription: Subscription;
  public repositories: Repository[];
  public resumeRepositories: ResumeRepositories;

  ngOnInit(): void {
    this.repositoriesSubscription = this.store.pipe(select(fromUsers.getUserRepositories)).subscribe((repositories: Repository[]) => {
      if (typeof repositories !== 'undefined' && repositories !== null) {
        this.repositories = repositories;
        this.resumeRepositories = getResumeRepositoriesByUser(this.repositories);
      }
    });
  }

  ngOnDestroy(): void {
    this.repositoriesSubscription.unsubscribe()
  }
}
