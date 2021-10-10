import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { response, newComment, Comment } from 'src/app/shared/users.interface'
import { Observable } from 'rxjs';
interface resp {
  data: string[]
}


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'app-id': environment.apiKey,
    Accept: 'application/json'
  });
  constructor(private http: HttpClient) {
    this._get<resp>('tag').subscribe( (r: resp) =>{
      this.tagList= r.data
    })
  }
  private _post<T>(query: string, data: any){
    query = environment.apiUrl + query;
    return this.http.post<T>( query, data, { headers: this.headers } );
  }
  
  private _exec<T>( query: string ) {
    query = environment.apiUrl + query;
    return this.http.get<T>( query, { headers: this.headers });
  }
  
  private _get<T>( query: string ) {
    query = environment.apiUrl + query;
    return this.http.get<T>( query, { headers: this.headers });
  }
  
  public tagList: any
  public getUsers(){
    return this._get('user')
    }
  /* POSTS */
  public getPost(){
    return this._get('post')
  }
  public getPostByTag(tag: string){
    return this._get(`post/${tag}`)
  }
  public getUser(id: string){
    return this._get(`user/${id}`)
  }
  public getUserPost(id: string){
    return this._get(`user/${id}/post`)
  }
  public getCommentOfPost(id: string): Observable<response>{
    return this._get(`post/${id}/comment`)
  }
  public makeComment(c: newComment): Observable<Comment>{
    return this._post('comment/create',c)
  }
}
