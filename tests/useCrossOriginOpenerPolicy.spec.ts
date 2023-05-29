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
  defaultCrossOriginOpenerPolicy,
  useCrossOriginOpenerPolicy
} from '../src/internals/useCrossOriginOpenerPolicy'

/*****************************************************************************************************************/

describe('useCrossOriginOpenerPolicy', () => {
  let request: SuperTest<Test>

  beforeEach(() => {
    request = supertest(toNodeListener(server))
  })

  it('should be defined', () => {
    expect(useCrossOriginOpenerPolicy).toBeDefined()
  })

  it('should set Cross-Origin-Opener-Policy correctly on the request', async () => {
    const res = await request.get('/helmet/cross-origin-opener-policy', {
      method: 'GET'
    })
    expect(res.header['cross-origin-opener-policy']).toEqual('same-origin')
  })

  it('should set Cross-Origin-Opener-Policy correctly on the request', async () => {
    const res = await request.get('/helmet/default-cross-origin-opener-policy', {
      method: 'GET'
    })
    expect(res.header['cross-origin-opener-policy']).toEqual(defaultCrossOriginOpenerPolicy)
  })

  it('should not set Cross-Origin-Opener-Policy correctly on the request', async () => {
    const res = await request.get('/helmet/no-cross-origin-opener-policy', {
      method: 'GET'
    })
    expect(res.header['cross-origin-opener-policy']).toEqual(undefined)
  })
})
