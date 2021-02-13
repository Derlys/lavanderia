import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  AccountUiEmailFormModule,
  AccountUiEmailListModule,
  AccountUiEmailPrimaryFormModule,
} from '@lavanderia/web/account/ui'
import { WebUiLoaderModule } from '@lavanderia/web/ui/loader'
import { AccountEmailComponent } from './account-email.component'

@NgModule({
  declarations: [AccountEmailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountEmailComponent,
      },
    ]),
    AccountUiEmailListModule,
    AccountUiEmailPrimaryFormModule,
    AccountUiEmailFormModule,
    WebUiLoaderModule,
  ],
})
export class AccountEmailModule {}
