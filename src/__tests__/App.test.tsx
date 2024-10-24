import AbstractSpruceTest, { test, assert } from '@sprucelabs/test-utils'
import React from 'react'
import App from '../App'

export default class AppTest extends AbstractSpruceTest {
    @test()
    protected static async canCreateApp() {
        const app = <App />
        assert.isTruthy(app)
    }
}
