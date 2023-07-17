import { TImage } from "../types";
import {UserGender, Units, ExerciseLevel} from '../enums';

export interface ISignIn {
    email: string,
    password: string
}

export interface IUserInfo {
    name: string,
    gender: UserGender,
    age: number,
    phoneNumber: number,
    image: TImage,
};

export interface IUser {
    userID: string;
    userInfo: IUserInfo;
    signInData: ISignIn;
}

export interface IUserPreferences {
    userID: string;
    units: Units,
    exerciseLevel: ExerciseLevel,
    // TODO: allow users to connect to the streaming playlist from spotify
}