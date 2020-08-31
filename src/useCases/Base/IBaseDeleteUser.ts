export interface IBaseDeleteUser {
  execute(id: string): Promise<void>
}
