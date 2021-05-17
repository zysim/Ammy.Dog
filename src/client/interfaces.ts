export interface Component<Opts> {
  init: (parent: HTMLElement, opts?: Opts) => this
}
