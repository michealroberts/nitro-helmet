/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { helmetHandlers } from './helmet'

import { helmetOnResponseMiddlewareHandlers } from './helmetOnResponseMiddleware'

import { type Handler } from '../shared/handler'

/*****************************************************************************************************************/

export const handlers: Handler[] = [...helmetHandlers, ...helmetOnResponseMiddlewareHandlers]

/*****************************************************************************************************************/
