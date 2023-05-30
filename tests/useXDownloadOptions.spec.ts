/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { beforeEach, describe, expect, it } from 'vitest'

import supertest, { type SuperTest, type Test } from 'supertest'

import { toNodeListener } from 'h3'

import { server } from './utilities/server'

import { defaultXDownloadOptions, useXDownloadOptions } from '../src/internals/useXDownloadOptions'

/*****************************************************************************************************************/

describe('useXDownloadOptions', () => {
  let request: SuperTest<Test>

  beforeEach(() => {
    request = supertest(toNodeListener(server))
  })

  it('should be defined', () => {
    expect(useXDownloadOptions).toBeDefined()
  })

  it('should set X-Download-Options on the request', async () => {
    const res = await request.get('/helmet/x-download-options', {
      method: 'GET'
    })
    expect(res.header['x-download-options']).toEqual('noopen')
  })

  it('should set X-Download-Options on the request', async () => {
    const res = await request.get('/helmet/default-x-download-options', {
      method: 'GET'
    })
    expect(res.header['x-download-options']).toEqual(defaultXDownloadOptions)
  })

  it('should not set X-Download-Options on the request', async () => {
    const res = await request.get('/helmet/no-x-download-options', {
      method: 'GET'
    })
    expect(res.header['x-download-options']).toEqual(undefined)
  })
})
