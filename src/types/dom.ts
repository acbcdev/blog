export type PropsAddGlobalEventListener = {
  selector: string;
  callback: (e: Event) => void;
  parent?: Document | HTMLElement;
};
