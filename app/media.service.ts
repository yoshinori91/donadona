import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Media} from "./media";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MediaService {
  private requestUrl = 'media'

  constructor(private http: Http) {
  }

  getMedia(): Promise<Media[]> {
    console.log('media service')
    return this.http.get(this.requestUrl)
      .toPromise()
      .then(response => response.json().data as Media[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}