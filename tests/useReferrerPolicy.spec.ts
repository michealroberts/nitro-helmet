/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { beforeEach, describe, expect, it } from 'vitest'

import supertest, { type SuperTest, type Test } from 'supertest'

import { toNodeListener } from 'h3'

import { server } from './utilities/server'

import { defaultReferrerPolicy, useReferrerPolicy } from '../src/internals/useReferrerPolicy'

/*****************************************************************************************************************/

describe('useReferrerPolicy', () => {
  let request: SuperTest<Test>

  beforeEach(() => {
    request = supertest(toNodeListener(server))
  })

  it('should be defined', () => {
    expect(useReferrerPolicy).toBeDefined()
  })

  it('should set Referrer-Policy on the request', async () => {
    const res = await request.get('/helmet/referrer-policy', {
      method: 'GET'
    })
    expect(res.header['referrer-policy']).toEqual('origin-when-cross-origin')
  })

  it('should set Referrer-Policy on the request', async () => {
    const res = await request.get('/helmet/default-referrer-policy', {
      method: 'GET'
    })
    expect(res.header['referrer-policy']).toEqual(defaultReferrerPolicy)
  })

  it('should not set Referrer-Policy on the request', async () => {
    const res = await request.get('/helmet/no-referrer-policy', {
      method: 'GET'
    })
    expect(res.header['referrer-policy']).toEqual(undefined)
  })
})
