import { Injectable } from '@angular/core';
import { FileItem } from '../models/file-item';
import * as firebase from "firebase";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import {Item} from "../models/item";
@Injectable({
  providedIn: 'root',
})
export class PhotoUploadService {

  private IMAGE_FOLDER = 'img';

  constructor(private db: AngularFirestore) {}

  /**
   * First, the file is upload to the firebase storage
   * Then, a record is created in firebase database
   */
  uploadImages(images: FileItem[]) {
    const storageRef = firebase.storage().ref();
    for (const item of images) {
      item.isUploading = true;
      if (item.progress >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef
        .child(`${this.IMAGE_FOLDER}/${item.name}`)
        .put(item.file);

      /**
       * Listen for events in this task
       */
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        // When the upload is in progress
        (snapshot: firebase.storage.UploadTaskSnapshot) => {
          item.progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`The current state is ${snapshot.state}`);
        },
        () => console.error(`There was an error with ${item.name}`),
        // When the upload was successful
        async () => {
          console.log(`The final state is ${(await uploadTask).state}`);
          item.url = await (await uploadTask).ref.getDownloadURL();
          item.isUploading = false;
          this.saveImage({ name: item.name, url: item.url });
        }
      );
    }

    // let options = {
    //   headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    // };
    // for (const banner_image of images) {
    //   banner_image.isUploading = true;
    //   if (banner_image.progress >= 100) {
    //   }
    // }
    // return this.httpClient.post<any>(`${environment.API_BASE_URL}admin/upload-ministry-image`, {banner_image},options);
  }
  /**
   * Insert record in the database
   * The record has two properties: 'name' and 'url'
   */
  private saveImage(image: { name: string; url: string }) {
    this.db.collection(`/${this.IMAGE_FOLDER}`).add(image);
  }

  /**
   * First, we delete the image from the firebase storage
   * Then, we delete the record from the collection
   */
  deleteImageFromStorage(image: Item) {
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`${this.IMAGE_FOLDER}/${image.name}`);
    imageRef
      .delete()
      .then(() => this.deleteImageFromDatabase(image.id))
      .catch((error) => console.error('Ups, an error has ocurred! ', error));
  }

  private deleteImageFromDatabase(id: string) {
    const doc: AngularFirestoreDocument<Item> = this.db
      .collection(`/${this.IMAGE_FOLDER}`)
      .doc<Item>(`/${id}`);
    doc.delete();
  }
}
