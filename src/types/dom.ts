export type PropsAddGlobalEventListener = {
  selector: string
  event: string
  callback: (e: Event) => void
  parent?: Document | HTMLElement
}