import NotificationStore from "../NotificationStore/notification-store";import {makeAutoObservable} from "mobx";import {TaskStore} from "store/AuthStore/taskStore";export class RootStore {    //init store    TaskStore: typeof TaskStore = null as unknown as typeof TaskStore;    Notification: typeof NotificationStore = null as unknown as typeof NotificationStore;    constructor() {        makeAutoObservable(this);        this.TaskStore = TaskStore;        this.Notification = NotificationStore;    }}export default new RootStore();