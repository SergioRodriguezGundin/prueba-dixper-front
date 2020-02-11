import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-repository',
  templateUrl: './resume-repository.component.html',
  styleUrls: ['./resume-repository.component.scss']
})
export class ResumeRepositoryComponent implements OnInit {

  @Input() resumeRepositories: any;

  constructor() { }

  ngOnInit(): void {
  }

}
