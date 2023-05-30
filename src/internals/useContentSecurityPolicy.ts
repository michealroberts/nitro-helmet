/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { setHeader } from 'h3'

import { type UseEventHeaderPolicy } from './types'

/*****************************************************************************************************************/

export const defaultContentSecurityPolicy = "\
  default-src 'self';base-uri 'self';\
  font-src 'self' https: data:;\
  form-action 'self';\
  frame-ancestors 'self';\
  img-src 'self' data:;\
  object-src 'none';\
  script-src 'self';\
  script-src-attr 'none';\
  style-src 'self' https: 'unsafe-inline';\
  upgrade-insecure-requests\
  "
  .trim()
  .replace(/\s/g, '')

/*****************************************************************************************************************/

export const useContentSecurityPolicy: UseEventHeaderPolicy<string> = (
  event,
  policy = defaultContentSecurityPolicy
) => {
  if (typeof policy === 'boolean' && !policy) {
    return
  }

  // If the policy is a boolean, then use the default policy:
  if (typeof policy === 'boolean' && policy) {
    policy = defaultContentSecurityPolicy
  }

  setHeader(event, 'Content-Security-Policy', policy)
}

/*****************************************************************************************************************/
