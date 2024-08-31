export default class SymptomLoggerImpl implements SymptomLogger {
    public static Class?: SymptomLoggerConstructor

    protected constructor() {}

    public static Create() {
        return new (this.Class ?? this)()
    }
}

export interface SymptomLogger {}

export type SymptomLoggerConstructor = new () => SymptomLogger
