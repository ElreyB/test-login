import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";

const appRoutes: Routes = [
  {
    path: "sign-up",
    component: SignUpComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
