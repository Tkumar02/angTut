import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private afs: AngularFirestore) {}

  addComment(comment:any){
    this.afs.collection('comments').add(comment)
  }

  loadComments(id:any){
    return this.afs.collection('comments', ref=>ref.where('postId','==',id)).snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          return data
        })
      })
    )
  }
}
