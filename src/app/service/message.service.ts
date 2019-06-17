import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../domain/message';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSource = new Subject<Message | Message[]>();
  private clearSource = new Subject<string>();

  messageObserver = this.messageSource.asObservable();
  clearObserver = this.clearSource.asObservable();

  add(message: Message) {
    if (message) {
      this.messageSource.next(message);      
    }
  }

  addAll(message: Message[]) {
    if (message) {
      this.messageSource.next(message);      
    }
  }

  clear(key? : string) {
    this.clearSource.next(key || null);

  }

}
