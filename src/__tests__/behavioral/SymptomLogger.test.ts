import AbstractSpruceTest, { test, assert } from '@sprucelabs/test-utils'
import SymptomLoggerImpl, { SymptomLogger } from '../../SymptomLogger'

export default class SymptomLoggerTest extends AbstractSpruceTest {
    private static instance: SymptomLogger

    protected static async beforeEach() {
        await super.beforeEach()
        this.instance = this.SymptomLogger()
    }

    @test()
    protected static async canCreateSymptomLogger() {
        assert.isTruthy(this.instance)
    }

    private static SymptomLogger() {
        return SymptomLoggerImpl.Create()
    }
}
