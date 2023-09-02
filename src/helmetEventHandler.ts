/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type EventHandler, type EventHandlerRequest, type EventHandlerResponse } from 'h3'

import { type H3HelmetOptions } from './internals/types'

import { defineHelmetEventHandler } from './defineHelmetEventHandler'

/*****************************************************************************************************************/

export const helmetEventHandler = <
  TRequest extends EventHandlerRequest,
  TResponse extends EventHandlerResponse
>(
  handler: EventHandler<TRequest, TResponse>,
  options?: H3HelmetOptions
): EventHandler<EventHandlerRequest, TResponse> => {
  return defineHelmetEventHandler(handler, options)
}

/*****************************************************************************************************************/
