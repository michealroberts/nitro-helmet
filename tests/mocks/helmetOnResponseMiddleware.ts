/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { eventHandler } from 'h3'

import { type Handler } from '../shared/handler'

import { helmet } from '../../src/onResponseHelmetMiddleware'

/*****************************************************************************************************************/

export const helmetOnResponseMiddlewareHandlers: Handler[] = [
  {
    method: 'GET',
    url: '/on-response-middleware/helmet',
    handler: eventHandler({
      onBeforeResponse: [helmet()],
      async handler(event) {
        return 'Hello Helmet!'
      }
    })
  }
]

/*****************************************************************************************************************/
