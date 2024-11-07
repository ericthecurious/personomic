import AbstractSpruceTest, { test, assert } from '@sprucelabs/test-utils'
import NavbarImpl, { Navbar } from '../../Navbar'

export default class NavbarTest extends AbstractSpruceTest {
    private static instance: Navbar

    protected static async beforeEach() {
        await super.beforeEach()
        this.instance = this.Navbar()
    }

    @test()
    protected static async canCreateNavbar() {
        assert.isTruthy(this.instance)
    }

    private static Navbar() {
        return NavbarImpl.Create()
    }
}
