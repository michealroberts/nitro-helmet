/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-cors
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { eventHandler, setHeaders } from 'h3'

import { type Handler } from '../shared/handler'

import {
  useContentSecurityPolicy,
  defaultContentSecurityPolicy
} from '../../src/internals/useContentSecurityPolicy'

/*****************************************************************************************************************/

export const helmetHandlers: Handler[] = [
  {
    method: 'GET',
    url: '/helmet/content-security-policy',
    handler: eventHandler(async event => {
      useContentSecurityPolicy(event, "default-src 'self';")

      return {
        policy: "default-src 'self';"
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/default-content-security-policy',
    handler: eventHandler(async event => {
      useContentSecurityPolicy(event)

      return {
        policy: defaultContentSecurityPolicy
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/no-content-security-policy',
    handler: eventHandler(async event => {
      useContentSecurityPolicy(event, false)

      return {
        policy: false
      }
    })
  }
]

/*****************************************************************************************************************/
