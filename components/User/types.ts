export interface User {
	name: string;
	email: string;
	photo?: string;
	role: string;
	password: string;
	confirmPassword: string;
	passwordChangedAt: Date;
	passwordResetToken: String;
	passwordResetExpires: Date;
	active: boolean;
}
