import { type Model, model, models, Schema } from "mongoose";

export interface IUser {
  _id?: string;
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  role: string | null;
  banned: boolean | null;
  banReason: string | null;
  banExpires: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISession {
  _id?: string;
  id: string;
  expiresAt: Date;
  token: string;
  ipAddress?: string;
  userAgent?: string;
  userId: string;
  impersonatedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAccount {
  _id?: string;
  id: string;
  accountId: string;
  providerId: string;
  userId: string;
  accessToken?: string;
  refreshToken?: string;
  idToken?: string;
  accessTokenExpiresAt?: Date;
  refreshTokenExpiresAt?: Date;
  scope?: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IVerification {
  _id?: string;
  id: string;
  identifier: string;
  value: string;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export const UserSchema = new Schema<IUser>(
  {
    _id: { type: String },
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    emailVerified: { type: Boolean, default: false },
    image: { type: String },
    role: { type: String },
    banned: { type: Boolean, default: false },
    banReason: { type: String },
    banExpires: { type: Date },
  },
  { timestamps: true, collection: "user" },
);

export const SessionSchema = new Schema<ISession>(
  {
    _id: { type: String },
    id: { type: String, required: true, unique: true },
    expiresAt: { type: Date, required: true },
    token: { type: String, required: true, unique: true },
    ipAddress: { type: String },
    userAgent: { type: String },
    userId: { type: String, required: true },
    impersonatedBy: { type: String },
  },
  { timestamps: true, collection: "session" },
);

export const AccountSchema = new Schema<IAccount>(
  {
    _id: { type: String },
    id: { type: String, required: true, unique: true },
    accountId: { type: String, required: true },
    providerId: { type: String, required: true },
    userId: { type: String, required: true },
    accessToken: { type: String },
    refreshToken: { type: String },
    idToken: { type: String },
    accessTokenExpiresAt: { type: Date },
    refreshTokenExpiresAt: { type: Date },
    scope: { type: String },
    password: { type: String },
  },
  { timestamps: true, collection: "account" },
);

export const VerificationSchema = new Schema<IVerification>(
  {
    _id: { type: String },
    id: { type: String, required: true, unique: true },
    identifier: { type: String, required: true },
    value: { type: String, required: true },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true, collection: "verification" },
);

export const User: Model<IUser> = models.User || model<IUser>("User", UserSchema);
export const Session: Model<ISession> = models.Session || model<ISession>("Session", SessionSchema);
export const Account: Model<IAccount> = models.Account || model<IAccount>("Account", AccountSchema);
export const Verification: Model<IVerification> =
  models.Verification || model<IVerification>("Verification", VerificationSchema);

export const user = User;
export const session = Session;
export const account = Account;
export const verification = Verification;
