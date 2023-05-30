/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { beforeEach, describe, expect, it } from 'vitest'

import supertest, { type SuperTest, type Test } from 'supertest'

import { toNodeListener } from 'h3'

import { server } from './utilities/server'

import { defaultXFrameOptions, useXFrameOptions } from '../src/internals/useXFrameOptions'

/*****************************************************************************************************************/

describe('useXFrameOptions', () => {
  let request: SuperTest<Test>

  beforeEach(() => {
    request = supertest(toNodeListener(server))
  })

  it('should be defined', () => {
    expect(useXFrameOptions).toBeDefined()
  })

  it('should set X-Frame-Options on the request', async () => {
    const res = await request.get('/helmet/x-frame-options', {
      method: 'GET'
    })
    expect(res.header['x-frame-options']).toEqual('SAMEORIGIN')
  })

  it('should set X-Frame-Options on the request', async () => {
    const res = await request.get('/helmet/default-x-frame-options', {
      method: 'GET'
    })
    expect(res.header['x-frame-options']).toEqual(defaultXFrameOptions)
  })

  it('should not set X-Frame-Options on the request', async () => {
    const res = await request.get('/helmet/no-x-frame-options', {
      method: 'GET'
    })
    expect(res.header['x-frame-options']).toEqual(undefined)
  })
})
