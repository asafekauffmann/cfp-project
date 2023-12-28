import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.css']
})
export class ReadmeComponent implements OnInit{

  organization: string = "The Project was structured and organized by dynamic modules and components, assigning so your structure and architectural needs specific for SPA with the Angular framework maintaining Programming concepts and good practices."

  baseArchtecture: string = " Master-page (Base of the module structure with dynamic templates); Pages (Base structure in the module referring to the main one); Services (base structure in the module referring to the services used in the components); App-Routing (base of module internal route structure); App-Module (module base structure); Model (Interface for Api and Services).;"

  sharedModuleParagraph: string = "In the Shared-Module, the structure and general services module of the dynamic components for use in the system, thus maintaining the standard in the project, Code reuse, Clean code/architecture."

  dependProject: string = "NodeJs - v.18 Angular - v.15 Angular Material - v.11.2.12.";

  gitHubFrontEnd: string = "https://github.com/asafekauffmann/cfp-project";

  gitHubBackEnd: string = "https://github.com/asafekauffmann/cfp-backend";

  deprecations: string = "The system is not implemented admin user login and its catalog page.";

  moduleSystem: string = "App-Module; Login-Module; Home-Module; Read.me-Module; Products-Module; Shared-Module;"

  constructor( ) { }

  ngOnInit( ): void {

  }

}
