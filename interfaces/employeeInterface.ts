export default interface IEmployee {
    cnumber: String,
    employee_id: String,
    data_hired: Number,
    email: String,
    addrRoles: Object,
    vacRoles: Object,
    password: String,
    extraEmails: any[],
    extraPhones: any[],
    first_name: String,
    first_native_name: String,
    gender: Number,
    internal_phone: String,
    is_active: Boolean,
    last_name: String,
    last_native_name: String,
    middle_native_name: String,
    other_info: String,
    phone: String,
    roles: any[],
    permissions: Object,
    room: String,
    skype: String,
    user_avatar: String,
    department: String,
    building: String,
    has_vacation_access: Boolean,
    employment_periods: any[],
    is_absent: Boolean,
    departmentIcon: String,
}