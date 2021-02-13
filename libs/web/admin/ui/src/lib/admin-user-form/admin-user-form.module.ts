import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@lavanderia/web/ui/button'
import { WebUiFormModule } from '@lavanderia/web/ui/form'
import { AdminUserFormComponent } from './admin-user-form.component'

@NgModule({
  declarations: [AdminUserFormComponent],
  exports: [AdminUserFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule, WebUiButtonModule],
})
export class AdminUserFormModule {}
