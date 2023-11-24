import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./core/pages/login/login.component";
import { HomeComponent } from "./core/pages/home/home.component";
import { usersRoutes } from "./users/users.routing";
import { profilesRoutes } from "./profiles/profiles.routing";
import { permissionsRoutes } from "./permissions/permissions.routing";
import { companiesRoutes } from "./companies/companies.routing";
import { workplacesRoutes } from "./workarea/workarea.routing";
import { HomePageComponent } from "./core/pages/home-page/home-page.component";
import { formatsRoutes } from "./formats/formats.routing";
import { sectionsRoutes } from './sections/sections.routing';
import { optionsRoutes } from './options/options.routing';
const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "home",
    component: HomeComponent,
    children: [
      ...usersRoutes,
      ...profilesRoutes,
      ...permissionsRoutes,
      ...formatsRoutes,
      ...sectionsRoutes,
      ...optionsRoutes,
      ...companiesRoutes,
      ...workplacesRoutes,
      { path: "homePage", component: HomePageComponent },
      { path: "", redirectTo: "companies", pathMatch: "full" },
    ],
  },
  { path: "**", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
