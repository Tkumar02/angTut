import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})

export class PostService{
    
    postList:Array<any>=[
        {id:1, title:'post1'},
    ]

    addPost(data: any){
        this.postList.push(data)
    }
}