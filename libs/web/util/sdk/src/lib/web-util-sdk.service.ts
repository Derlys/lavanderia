import { Injectable } from '@angular/core'
import { ApolloAngularSDK } from '../generated/graphql'

@Injectable({ providedIn: 'root' })
export class WebUtilSdkService extends ApolloAngularSDK {}
