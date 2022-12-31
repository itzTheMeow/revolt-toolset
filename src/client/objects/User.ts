import { APIUser } from "../api";
import Client from "../Client";
import Attachment, { AttachmentArgs } from "./Attachment";
import BaseObject from "./BaseObject";

class Bot {
  constructor(private parent: User) {}
  public get ownerID() {
    return this.parent.source.bot.owner;
  }
  public get owner() {
    return this.parent.client.users.get(this.ownerID);
  }
  public async fetchOwner(fetchNew = false) {
    return await this.parent.client.users.fetch(this.ownerID, fetchNew);
  }
}

export default class User extends BaseObject<APIUser> {
  constructor(client: Client, data: APIUser) {
    super(client, data);
  }
  public get username() {
    return this.source.username;
  }
  public get bot(): Bot | null {
    return this.source.bot ? new Bot(this) : null;
  }
  public get avatar(): Attachment | null {
    return this.source.avatar ? new Attachment(this.client, this.source.avatar) : null;
  }
  public generateAvatarURL(...args: AttachmentArgs) {
    return this.avatar ? this.avatar.generateURL(...args) : null;
  }
}
/*
    badges: Nullable<number>;
    status: Nullable<UserStatus>;
    relationship: Nullable<RelationshipStatus>;
    online: boolean;
    privileged: boolean;
    flags: Nullable<number>;
*/
