export type CustomImageConfig = {
  src: string
  width?: string | number
  height?: string | number
  alt?: string
  borderRadius?: string | number
  includeOverlay?: boolean
  overlayContent?: JSX.Element | string
}
