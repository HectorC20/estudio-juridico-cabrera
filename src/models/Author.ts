export class Author {
    id: string;
    name: string;
    lastname: string;
    profileImage?: string;
    avatar?: string;
    description?: string;
    role?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;

    constructor(data: Partial<Author>) {
        this.id = data.id || "";
        this.name = data.name || "";
        this.lastname = data.lastname || "";
        this.profileImage = data.profileImage;
        this.avatar = data.avatar;
        this.description = data.description;
        this.role = data.role;
        this.facebook = data.facebook;
        this.instagram = data.instagram;
        this.linkedin = data.linkedin;
    }

    get fullName(): string {
        return `${this.name} ${this.lastname}`;
    }
}
