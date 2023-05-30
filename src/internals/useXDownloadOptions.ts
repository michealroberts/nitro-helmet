/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { setHeader } from 'h3'

import { type UseEventHeaderPolicy, type XDownloadOptions } from './types'

/*****************************************************************************************************************/

export const defaultXDownloadOptions = 'noopen'

/*****************************************************************************************************************/

export const useXDownloadOptions: UseEventHeaderPolicy<XDownloadOptions> = (
  event,
  policy = defaultXDownloadOptions
) => {
  if (typeof policy === 'boolean' && !policy) {
    return
  }

  // If the policy is a boolean, then use the default policy:
  if (typeof policy === 'boolean') {
    policy = defaultXDownloadOptions
  }

  setHeader(event, 'X-Download-Options', policy)
}
