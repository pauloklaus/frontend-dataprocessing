class ValidationError extends Error {
    field: string;

    constructor(message: string, field: string) {
        super(message);
        this.name = this.constructor.name;
        this.field = field;
    }
}

export default ValidationError;
