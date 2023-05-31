/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type EventHandler } from 'h3'

import { type H3HelmetOptions } from './internals/types'

import { defineHelmetEventHandler } from './defineHelmetEventHandler'

/*****************************************************************************************************************/

export const helmetEventHandler = <T>(handler: EventHandler<T>, options?: H3HelmetOptions) => {
  return defineHelmetEventHandler(handler, options)
}

/*****************************************************************************************************************/
