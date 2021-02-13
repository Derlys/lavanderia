import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AccountUiPasswordFormModule } from '@lavanderia/web/account/ui'
import { WebUiLoaderModule } from '@lavanderia/web/ui/loader'
import { AccountPasswordComponent } from './account-password.component'

@NgModule({
  declarations: [AccountPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AccountPasswordComponent }]),
    AccountUiPasswordFormModule,
    WebUiLoaderModule,
  ],
})
export class AccountPasswordModule {}
