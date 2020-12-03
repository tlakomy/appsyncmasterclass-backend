import { create } from 'amplify-appsync-simulator/lib/velocity/util';

export interface RandomUser {
  name: string;
  password: string;
  email: string;
}

export interface AppSyncIdentity {
  username: string;
}

interface AppSyncContextEntry {
  identity: AppSyncIdentity;
  args: Record<string, any>;
  arguments: Record<string, any>;
}

export interface AppSyncContext {
  context: AppSyncContextEntry;
  ctx: AppSyncContextEntry;
  util: ReturnType<typeof create>;
  utils: ReturnType<typeof create>;
}
