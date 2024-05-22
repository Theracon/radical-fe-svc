export type CustomDialogConfig = {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  title: string
  content: JSX.Element | string
  primaryAction?: MouseEventHandler<HTMLAnchorElement>
  secondaryAction?: MouseEventHandler<HTMLAnchorElement>
}
