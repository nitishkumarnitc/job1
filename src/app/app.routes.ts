import {Routes, RouterModule} from "@angular/router";
import {CompetitionsComponent} from "./competitions/competitions.component";
import {ModuleWithProviders} from "@angular/core";
import {TablesComponent} from "./tables/tables.component";
import {FixturesPlayerListComponent} from "./fixtures-player-list/fixtures-player-list.component";
/**
 * Created by nitish on 7/2/17.
 */


export const router:Routes=[
  {path:'table/:id',component:TablesComponent},
  {path:'table',component:TablesComponent},
  {path:'competitions', component:CompetitionsComponent},
  {path:'fixturesplayerlist/:id', component:FixturesPlayerListComponent},
  {path:'fixturesplayerlist', component:FixturesPlayerListComponent}

];

export const routes:ModuleWithProviders=RouterModule.forRoot(router);
