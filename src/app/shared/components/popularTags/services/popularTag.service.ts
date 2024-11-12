import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { PopularTagType } from "src/app/shared/types/popularTag.type";
import { GetPopularTagsResponseInterface } from "../types/getPopularTagsResponse.interface";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class PopularTagService {
    constructor(private http: HttpClient) {}

    getPopularTags() : Observable<PopularTagType[]> {
        const url = environment.apiUrl + '/tags'
        return this.http.get<GetPopularTagsResponseInterface>(url).pipe(map((response) => response.tags))
    }

}