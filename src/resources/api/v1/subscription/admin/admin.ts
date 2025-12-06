// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as UsersAPI from './users';
import { Users } from './users';

export class Admin extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

Admin.Users = Users;

export declare namespace Admin {
  export { Users as Users };
}
