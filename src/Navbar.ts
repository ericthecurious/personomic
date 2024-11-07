export default class NavbarImpl implements Navbar {
    public static Class?: NavbarConstructor

    protected constructor() {}

    public static Create() {
        return new (this.Class ?? this)()
    }
}

export interface Navbar {}

export type NavbarConstructor = new () => Navbar
