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
  defaultCrossOriginEmbedderPolicy,
  useCrossOriginEmbedderPolicy
} from '../src/internals/useCrossOriginEmbedderPolicy'

/*****************************************************************************************************************/

describe('useCrossOriginEmbedderPolicy', () => {
  let request: SuperTest<Test>

  beforeEach(() => {
    request = supertest(toNodeListener(server))
  })

  it('should be defined', () => {
    expect(useCrossOriginEmbedderPolicy).toBeDefined()
  })

  it('should set Cross-Origin-Embedder-Policy correctly on the request', async () => {
    const res = await request.get('/helmet/cross-origin-embedder-policy', {
      method: 'GET'
    })
    expect(res.header['cross-origin-embedder-policy']).toEqual('require-corp')
  })

  it('should set Cross-Origin-Embedder-Policy correctly on the request', async () => {
    const res = await request.get('/helmet/default-cross-origin-embedder-policy', {
      method: 'GET'
    })
    expect(res.header['cross-origin-embedder-policy']).toEqual(defaultCrossOriginEmbedderPolicy)
  })

  it('should not set Cross-Origin-Embedder-Policy correctly on the request', async () => {
    const res = await request.get('/helmet/no-cross-origin-embedder-policy', {
      method: 'GET'
    })
    expect(res.header['cross-origin-embedder-policy']).toEqual(undefined)
  })
})
