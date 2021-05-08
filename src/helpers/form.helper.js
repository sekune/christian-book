export const Controls = {
    input: "input",
    textarea: "textarea",
    select: "select",
    check: "check",
    option: "option"
}

export const Validators = {
    required: (value) => {
        return value ? null : 'Шаардлагатай талбар';
    },
    stringLength: (min = 0, max = 0) => {
        return (value = '') => {
            let result = null;
            if (min > 0 && (value === null || value.length < min))
                result = 'Тэмдэгт цөөн байна';
            if (max > 0 && value !== null && value.length > max)
                result = 'Тэмдэгт олон байна';
            return result;
        }
    },
    numberRange: (min = 0, max = 0) => {
        return (value = 0) => {
            let result = null;
            if (min > 0 && (value === null || value < min))
                result = 'Утга бага байна';
            if (max > 0 && value !== null && value > max)
                result = 'Утга их байна';
            return result;
        }
    },
    email: (value) => {
        const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return value ? regex.test(value) ? null : 'Имэйл биш байна' : null;
    }
};

export class FormControl {
    constructor(label, validators = [], value = null, component = 'input', options = []) {
        this.errors = null;
        this.label = label;
        this.validators = validators;
        this.value = value;
        this.component = component;
        this.options = options;
    }

    reset() {
        this.value = null;
        this.errors = null;
    }

    validate() {
        this.errors = null;
        if (!this.validators || !this.validators.length) return;
        this.validators.forEach(validator => {
            const error = validator.call(this, this.value);
            if (error !== null) {
                if (!this.errors) this.errors = [];
                this.errors.push(error);
            }
        })
    }
}

export class FormGroup {
    constructor() {
        this.controls = {}
    }

    validate() {
        for (const key in this.controls)
            this.controls[key].validate();
    }

    reset() {
        for (const key in this.controls)
            this.controls[key].reset();
    }

    get errors() {
        let retval = {}
        for (const key in this.controls)
            if (this.controls[key].errors !== null)
                retval[key] = this.controls[key].errors;
        return retval;
    }

    get hasError() {
        let retval = 0;
        for (const key in this.controls)
            if (this.controls[key].errors !== null)
                retval += this.controls[key].errors.length;
        return retval;
    }

    get data() {
        const retval = {};
        for (const key in this.controls)
            retval[key] = this.controls[key].value || null;
        return retval;
    }
}
