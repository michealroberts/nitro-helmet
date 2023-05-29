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
  defaultCrossOriginResourcePolicy,
  useCrossOriginResourcePolicy
} from '../src/internals/useCrossOriginResourcePolicy'

/*****************************************************************************************************************/

describe('useCrossOriginResourcePolicy', () => {
  let request: SuperTest<Test>

  beforeEach(() => {
    request = supertest(toNodeListener(server))
  })

  it('should be defined', () => {
    expect(useCrossOriginResourcePolicy).toBeDefined()
  })

  it('should set Cross-Origin-Resource-Policy on the request', async () => {
    const res = await request.get('/helmet/cross-origin-resource-policy', {
      method: 'GET'
    })
    expect(res.header['cross-origin-resource-policy']).toEqual('cross-origin')
  })

  it('should set Cross-Origin-Resource-Policy on the request', async () => {
    const res = await request.get('/helmet/default-cross-origin-resource-policy', {
      method: 'GET'
    })
    expect(res.header['cross-origin-resource-policy']).toEqual(defaultCrossOriginResourcePolicy)
  })

  it('should not set Cross-Origin-Resource-Policy on the request', async () => {
    const res = await request.get('/helmet/no-cross-origin-resource-policy', {
      method: 'GET'
    })
    expect(res.header['cross-origin-resource-policy']).toEqual(undefined)
  })
})
