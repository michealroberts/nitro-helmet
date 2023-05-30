/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { beforeEach, describe, expect, it } from 'vitest'

import supertest, { type SuperTest, type Test } from 'supertest'

import { toNodeListener } from 'h3'

import { server } from './utilities/server'

import {
  defaultXContentTypeOptions,
  useXContentTypeOptions
} from '../src/internals/useXContentTypeOptions'

/*****************************************************************************************************************/

describe('useXContentTypeOptions', () => {
  let request: SuperTest<Test>

  beforeEach(() => {
    request = supertest(toNodeListener(server))
  })

  it('should be defined', () => {
    expect(useXContentTypeOptions).toBeDefined()
  })

  it('should set X-Content-Type-Options on the request', async () => {
    const res = await request.get('/helmet/x-content-type-options', {
      method: 'GET'
    })
    expect(res.header['x-content-type-options']).toEqual('nosniff')
  })

  it('should set X-Content-Type-Options on the request', async () => {
    const res = await request.get('/helmet/default-x-content-type-options', {
      method: 'GET'
    })
    expect(res.header['x-content-type-options']).toEqual(defaultXContentTypeOptions)
  })

  it('should not set X-Content-Type-Options on the request', async () => {
    const res = await request.get('/helmet/no-x-content-type-options', {
      method: 'GET'
    })
    expect(res.header['x-content-type-options']).toEqual(undefined)
  })
})
