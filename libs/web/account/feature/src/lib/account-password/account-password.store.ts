import { Injectable } from '@angular/core'

import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { AccountUpdatePasswordInput, WebUtilSdkService } from '@lavanderia/web/util/sdk'
import { mergeMap } from 'rxjs/operators'

interface AccountPasswordState {
  errors?: any
  loading: boolean
}

@Injectable()
export class AccountPasswordStore extends ComponentStore<AccountPasswordState> {
  constructor(private readonly data: WebUtilSdkService) {
    super({ loading: false })
  }

  readonly vm$ = this.select(({ errors, loading }) => ({ errors, loading }))

  readonly updatePasswordEffect = this.effect<AccountUpdatePasswordInput>((input$) =>
    input$.pipe(
      mergeMap((input) =>
        this.data.accountUpdatePassword({ input }).pipe(
          tapResponse(
            ({ errors }) => this.patchState({ errors }),
            (errors) => this.patchState({ errors, loading: false }),
          ),
        ),
      ),
    ),
  )
}
