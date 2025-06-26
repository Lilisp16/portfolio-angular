import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  ngAfterViewInit() {
    setTimeout(() => {
      const loadingMessage = document.getElementById('loading-message');
      if (loadingMessage) loadingMessage.style.display = 'none';
    }, 3000);
  }

}
