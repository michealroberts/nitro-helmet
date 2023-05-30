/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type H3Event, setHeader } from 'h3'

import { type XDownloadOptions } from './types'

/*****************************************************************************************************************/

export const defaultXDownloadOptions = 'noopen'

/*****************************************************************************************************************/

export const useXDownloadOptions = (
  event: H3Event,
  policy: XDownloadOptions | boolean = defaultXDownloadOptions
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
