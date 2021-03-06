export type Mode = 'important' | 'success' | 'danger'

export type Spacing = 'default' | 'none' | 'small' | 'medium' | 'large'
export type BorderRadius = 'default' | 'none' | 'small' | 'medium' | 'large'

export type Theme = {
  spacing: Record<Spacing, number>
  borderRadius: Record<BorderRadius, number>
  outlineWidth: number
  palette: Palette
}

export type Palette = {
  background: string
  text: string
  accent: string
  mode: Record<Mode, string>
}
