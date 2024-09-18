import { Continent } from "./continent.response";

export interface Languages {
	code: string;
	name: string;
}

export interface Country {
	__typename: string;
	code: string;
	name: string;
	capital: string;
	emoji: string;
	continent: Continent;
}

export interface CountryFullInfo extends Country {
	languages: Languages[]
	phone: string
	currency: string
	awsRegion: string
}