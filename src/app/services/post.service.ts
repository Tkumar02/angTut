import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root',
})

export class PostService{

    constructor(private afs: AngularFirestore){}
    
    postList:Array<any>=[
        {id:1, title:'post1'},
    ]

    addPost(data: any){
        this.postList.push(data)
    }

    loadData(){
        return this.afs.collection('posts').snapshotChanges().pipe(
            map(actions=>{
                return actions.map(a=>{
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id
                    return {id,data}
                })
            })
        )
    }

    loadFeatured(){
        return this.afs.collection('posts',ref => ref.where('isFeatured','==',true).limit(3)).snapshotChanges().pipe(
            map(actions=>{
                return actions.map(a=>{
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id
                    return {id,data}
                })
            })
        )
    }

    loadLatest(){
        return this.afs.collection('posts',ref=>ref.orderBy('createdAt')).snapshotChanges().pipe(
            map(actions =>{
                return actions.map(a=>{

                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id,data}
                })
            }))
    }

    loadCategoryPosts(categoryID:any){
        return this.afs.collection('posts', ref=>ref.where('category.categoryId','==',categoryID)).snapshotChanges().pipe(
            map(actions=>{
                return actions.map(a=>{
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, data}
                })
            })
        )
    }
}