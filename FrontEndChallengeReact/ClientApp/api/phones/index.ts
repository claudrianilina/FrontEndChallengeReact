import { PhoneCollection, Phone, PhoneDetail } from "../../model/phone";
import * as fetch from 'isomorphic-fetch';
import { SiteProps } from "../../model/Config";

function Get<T>(): Promise<Phone[]> {
    let baseURL = SiteProps.SiteURL + "/api/phones/Get";
    let obj: RequestInit = {
        method: 'GET'
    };

    return fetch(baseURL, obj).then(response => (response.json()));
}

function GetById<T>(id: number): Promise<PhoneDetail> {
    let baseURL = SiteProps.SiteURL + "/api/phones/Get";
    let obj: RequestInit = {
        method: 'GET',
        headers: { Pragma: 'no-cache' }
    };

    let url = baseURL + "/" + id;
    return fetch(url, obj).then(response => (response.json()));
}

export const PhonesApi = {
    Get,
    GetById
}