const signUpConfig: any = {
    header: 'My customized sign up', 
    hideAllDefaults: false, 
    signUpFields: [
        {
            label: 'Full name', 
            key: 'name',
            required: 'true',
            displayOrder: 1,
            type: 'string',
        },
        {
            label: 'Email',
            key: 'email',
            required: true,
            displayOrder: 2,
            type: 'string',
        },
        {
            label: 'Password',
            key: 'password',
            required: true,
            displayOrder: 5,
            type: 'password',
        }
    ]
}

export default signUpConfig;