/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { beforeEach, describe, expect, it } from 'vitest'

import supertest, { type SuperTest, type Test } from 'supertest'

import { toNodeListener } from 'h3'

import { server } from './utilities/server'

import { defaultXXSSProtection, useXXSSProtection } from '../src/internals/useXXSSProtection'

/*****************************************************************************************************************/

describe('useXXSSProtection', () => {
  let request: SuperTest<Test>

  beforeEach(() => {
    request = supertest(toNodeListener(server))
  })

  it('should be defined', () => {
    expect(useXXSSProtection).toBeDefined()
  })

  it('should set X-XSS-Protection on the request', async () => {
    const res = await request.get('/helmet/x-xss-protection', {
      method: 'GET'
    })
    expect(res.header['x-xss-protection']).toEqual('1; mode=block')
  })

  it('should set X-XSS-Protection on the request', async () => {
    const res = await request.get('/helmet/default-x-xss-protection', {
      method: 'GET'
    })
    expect(res.header['x-xss-protection']).toEqual(defaultXXSSProtection)
  })

  it('should not set X-XSS-Protection on the request', async () => {
    const res = await request.get('/helmet/no-x-xss-protection', {
      method: 'GET'
    })
    expect(res.header['x-xss-protection']).toEqual(undefined)
  })
})
