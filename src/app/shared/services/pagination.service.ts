import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class PaginationService {
  user = JSON.parse(localStorage.getItem('userData'));

  constructor(private afs: AngularFirestore) { }

  public init({ col, orderBy, limit }: { col: any; orderBy: any; limit: number; }) {
    return this.afs.collection(`userData/${this.user.uid}/${col}`,
      ref => ref.orderBy(orderBy) // .limit(limit)
    ).snapshotChanges().pipe(map(changes => {
      return changes.map(change => {
        const data = change.payload.doc.data(); const id = change.payload.doc.id; return { id, ...data };
      });
    }));
  }

}
